const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const authRoutes = require('./Routes/authRoutes');
const billingRoutes = require('./Routes/billingRoutes');
require('./Models/User');
require('./Services/passport');
require('./Services/passportFb');
require('./Models/Survey');


mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billingRoutes(app);
require('./Routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (requestAnimationFrame, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

var PORT = process.env.PORT || 5000;
app.listen(PORT);