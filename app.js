var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var system = require('./routes/system');
var deliver = require('./routes/deliver');
var requester = require('./routes/requester');
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PROT || 8080;

// ROUTES FOR OUR API.
var router = express.Router();

/*********************************** Declare webservices endpoint here *****************************************/
// SYSTEM restful Api
router.get('/', system.hellowWorld);

// router.get('/', function(req, res){
//   res.json({message: 'Hello World!'});
// });

/******************************* Declare webservices endpoint here END *****************************************/

app.use('/api', router);
app.use('/', index);
app.use('/users', users);

app.listen(port);
console.log('Social delivery services on port ' + port);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;
