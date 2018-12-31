var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var indexRouter = require('./routes/index');
var auth = require('./routes/auth');
var usersRouter = require('./routes/users');
var senderRouter = require('./routes/sender');
var deliverRouter = require('./routes/deliver');
var carrierRouter = require('./routes/carrier');
var passport = require('passport');
var session = require('express-session');
var app = express();
var flash=require("connect-flash");
// var GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/sdapp')
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));
mongoose.set('useFindAndModify', false); // wait for future update before removing it.  (node:6189) DeprecationWarning: collection.findAndModify is deprecated. Use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead.

// view engine setup
app.locals.pretty = true;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(flash());

/******************************** OAuth setup ****************************************/
app.use(session({
  secret: 's3cr3t',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


app.use('/', indexRouter); 
app.use('/users', usersRouter);
app.use('/auth', auth);
app.use(express.static('public'))

//passport local username and password continue..
app.get('/login', auth);
app.get('/logout', auth);
app.get('/auth/facebook', auth);
app.get('/auth/facebook/callback', auth);
// app.get('/login', function(req, res) {
//   console.log(req.flash('message'));
//   console.log(req.session);
//   console.log(req.flash());
//   res.render('login', {
//     errors: null,
//     message: req.flash('message')
//   });
// });
/*********************************** OAuth END *************************************/
app.use('/tobuy', senderRouter.tobuy);
app.use('/todeliver', deliverRouter.todeliver);
app.use('/inittakejob', deliverRouter.inittakejob);
app.use('/takejob', deliverRouter.takejob);
app.use('/addRequest', senderRouter.addRequest);
app.get('/myjob', usersRouter);
app.get('/removejob', usersRouter);
app.use('/index', indexRouter);

app.use('/loginerror', function(req, res, next) {
  res.render('loginerror');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(function (req, res, next) {
  res.locals.login = req.isAuthenticated();
  next();
});

module.exports = app;