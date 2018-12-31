var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/User');

passport.use(new GoogleStrategy({
    clientID: "537322109043-hqnl1i17jt4rfpibl4fbiq7kc3ig1ra1.apps.googleusercontent.com",
    clientSecret: "9lXW2upaQqEPf1zKiSnOl_Gg",
    callbackURL: "https://node-app-socdel.c9users.io/auth/google/callback"
    //auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
        console.log('Find or Create User.' + profile.displayName + " ID: " + profile.id);
        User.findOneAndUpdate({google_id: profile.id}, {name: profile.displayName}, {upsert:true,new: true}, function (err, user) {
            console.log("User: " + user);
            return done(err, user);
       });
  }
));

module.exports = passport;