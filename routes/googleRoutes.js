const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv')


// Serialize user data to store in a session
passport.serializeUser((user,done) =>{
  done(null,user.id);
})


// Deserialize user data from the session
passport.deserializeUser((user,done) =>{
  done(null,user);
})


// Configure Passport to use Google OAuth 2.0 for authentication
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CLIENT_URL// The URL where Google should redirect after authentication
  },

  //register
  function(accessToken, refreshToken, profile, cb) {
    

    // This function is called when a user is successfully authenticated with Google
   // console.log(profile)

    cb(null,profile)   // Call the callback function with the user's profile
  }
));