var express = require('express');
var router = express.Router();
var Task = require('../models/Task');
var userRouter = require('./users');

/* Return my request listing. */
router.get('/myjob', function(req, res, next) {
  
  console.log("My JOB " + req.user._id);
    Task.find({userid: req.user._id}, function (err, jobs) {
        // docs is an array of partially-`init`d documents
        // defaults are still applied and will be "populated"
        console.log('find: ' + jobs);
        res.render('myjob', { title: 'My Job ', jobs: jobs, user: req.user });
    });
});

/* REMOVE JOB */
router.get('/removejob', function(req, res, next) {
  
  console.log("Remove JOB " + req.query.id);
    Task.findOneAndDelete({_id: req.query.id}, function (err, offer) {
      // docs is an array of partially-`init`d documents
      // defaults are still applied and will be "populated"
      console.log('Remove: ' + offer);

      console.log("Return to my JOB " + req.user._id);
      Task.find({userid: req.user._id}, function (err, jobs) {
          // docs is an array of partially-`init`d documents
          // defaults are still applied and will be "populated"
          console.log('find: ' + jobs);
          res.render('myjob', { title: 'My Job ', jobs: jobs, user: req.user });
      });
    });
});


/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
