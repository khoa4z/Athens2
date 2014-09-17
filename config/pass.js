'use strict';

var mongoose = require('mongoose')
   , passport = require('passport')
   , LocalStrategy = require('passport-local').Strategy
   , FacebookStrategy = require('passport-facebook').Strategy
   , GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
   , User = mongoose.model('User');
    
    
// Serialize sessions
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findOne({ _id: id }, function (err, user) {
    done(err, user);
  });
});

// Use local strategy
console.log("Passport New");
passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  },
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {
          'errors': {
            'username': { type: 'username is not registered.' }
          }
        });
      }
      if (!user.authenticate(password)) {
        return done(null, false, {
          'errors': {
            'password': { type: 'Password is incorrect.' }
          }
        });
      }
      return done(null, user);
    });
  }
));
