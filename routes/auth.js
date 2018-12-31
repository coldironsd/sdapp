var express = require('express');
var router = express.Router();
//var passportTwitter = require('../auth/twitter');
var passportGoogle = require('../auth/google');
var passportFacebook = require('../auth/facebook');
//var passportGitHub = require('../auth/github');

/* LOGIN ROUTER */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Please Sign In with:' });
});

/* LOGOUT ROUTER */
router.get('/logout', function(req, res){
  console.log('logout');
  req.logout();
  res.redirect('/');
});

/* GOOGLE ROUTER */
router.get('/google',
  passportGoogle.authenticate('google', 
  { scope: 'https://www.google.com/m8/feeds',
    scope: 'https://www.googleapis.com/auth/plus.login'}));

router.get('/google/callback',
  passportGoogle.authenticate('google', { failureRedirect: '/loginerror' }),
  function(req, res) {
    console.log('GOOGLE CALLBACK URL');
    console.log('GOOGLE LOGIN SUCCESSFUL.');
    res.redirect('/'); 
  });
  
/* FACEBOOK ROUTER */
router.get('/auth/facebook',
  passportFacebook.authenticate('facebook'));

router.get('/auth/facebook/callback',
  passportFacebook.authenticate('facebook', { 
    successRedirect: '/',
    failureRedirect: '/loginerror' }),
  function(req, res) {
    // Successful authentication, redirect home.
   console.log('FB CALLBACK URL');
    console.log('FB LOGIN SUCCESSFUL.');
    res.redirect('/');
  });
  
 module.exports = router;
