const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy : true
        },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.find({ googleId: profile.id});
                    if (existingUser.length > 0) {
                        // if user already exists
                        console.log(existingUser)
                        return done(null, existingUser);
                    }
                    const user = await new User({ googleId: profile.id, email: profile.email }).save();
                    done(null, user);
        }
    )
);
