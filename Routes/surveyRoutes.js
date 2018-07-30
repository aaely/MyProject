const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const mongoose = require('mongoose');
const Mailer = require('../Services/Mailer');
const surveyTemplate = require('../Services/emailTemplates/surveyTemplate');
//const { URL } = requireCredits('url');
//const Path = requireCredits('path-parser');

const Survey = mongoose.model('surveys');

module.exports = app => {

    app.get('/api/surveys', requireLogin, async (req, res) => {
        const surveys = await Survey.find({ _user: req.user.id })
            .select({ recipients: false });
            
        res.send(surveys);
    });

    app.get('/api/surveys/thanks', (req, res) => {
        res.send('Thanks for voting!');
    });

   app.post('/api/surveys/webhooks', (req, res) => {
        const events = _.map(req.body, (event) => {
            const p = new Path('/api/surveys:surveyId/:choice');

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
                                lastResponded: new Date()
                            }
                        ).exec();
                    })
                const pathname = new URL(event.URL).pathname;
            
                console.log(p.test(pathname));
        });
    });
    
    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });

        // great place to send an email!
        const mailer = new Mailer(survey, surveyTemplate(survey));

        try{
        await mailer.send();
        await survey.save();
        req.user.credits -= 1;
        const user = await req.user.save();
        
        res.send(user);
        } catch (err) {
            res.status(422).send(user);
        }
    });
};