const Path = require('path-parser').default;
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../Services/Mailer');
const surveyTemplate = require('../Services/emailTemplates/surveyTemplate');
const _ = require('lodash');



const Survey = mongoose.model('surveys');

module.exports = app => {

    app.get('/api/surveys', requireLogin, async (req, res) => {
        const surveys = await Survey.find()
            
        res.send(surveys);
    });

    app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        res.send('Thanks for filling this out, you\'ve made our lives easier!');
    });

   app.post('/api/surveys/webhooks', (req, res) => {
    const p = new Path('/api/surveys/:surveyId/:choice');
    console.log(req.body);
    console.log(p);
                _.chain(req.body)
                    .map(({ email, url }) => {
                        const match = p.test(new URL(url).pathname);
                        if (match) {
                            return { email, surveyID: match.surveyId, choice: match.choice };
                        }
                    })
                    .compact()
                    .uniqBy('email', 'surveyId')
                    .each(({ surveyId, email, choice }) => {
                        Survey.updateOne(
                            {
                                _id: surveyId,
                                recipients: {
                                    $elemMatch: { email: email, responded: false}
                                }
                            },
                            {
                                $inc: { [choice]: 1 },
                                $set: { 'recipients.$.responded': true },
                                lastResponded: Date.now()
                            }
                        ).exec();
                    })
                    .value();
                res.send({});
        });
    
    
    app.post('/api/surveys', requireLogin, async (req, res) => {
        const { vendor, name, app, email, timeIn, vendorTicket, reason } = req.body;

        const survey = new Survey({
            vendor,
            name,
            app,
            timeIn,
            email: email.split(',').map(email => ({ email: email.trim() })),
            vendorTicket,
            reason,
            _user: req.user.id,
            date: Date.now()
        });
        console.log(survey);
        // great place to send an email!
        const mailer = new Mailer(survey, surveyTemplate(survey));

        try{
        await mailer.send();
        await survey.save();
        const user = await req.user.save();
        req.user.credits -= 1;
        res.send(user);
        } catch (err) {
            res.status(422).send(user);
        }
    });
};