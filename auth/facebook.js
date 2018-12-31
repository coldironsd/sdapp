var passport = require('passport')
, FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/User');

passport.use(new FacebookStrategy({
    clientID: "2685476258345171",
    clientSecret: "f6ccb675b08dae6eeb51edf529443b09",
    callbackURL: "https://node-app-socdel.c9users.io/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOneAndUpdate({name: profile.displayName}, {name: profile.displayName,userid: profile.id}, function(err, user) {
      if (err) { return done(err, user); }
      done(null, user);
    });
  }
));

module.exports = passport;