// require passport
const passport = require('passport');
// require google stretegy
const googleStretegy = require('passport-google-oauth').OAuth2Strategy;
// require crypto for generating random password
const crypto = require('crypto');
// require user model 
const User = require('../models/User');

// tell passport to use new stretegy for google login
passport.use(new googleStretegy({
    // options for google stretegy 
        clientID: '790978963506-vho023ge5cmc0kqokakfsk549ole1apr.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: 'http://localhost:10000/user/auth/google/callback',
        passReqToCallback: true,
    },
    async function(request, accessToken, refreseToken, profile, done) {
        // console.log(profile);
        // find user

        try {
            const user = await User.findOne({ email: profile.emails[0].value });
            if (user) {
                return done(null, user);
            }
            if (!user) {
                // if not found, creat user and set it as req.user
                const newUser = await User.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex')
                })
                if (newUser) {
                    return done(null, newUser);
                }
            }
        } catch (error) {
            console.log('error in google stretegy passport', error);
        }
    }
));
module.exports = passport;