var Task = require('../models/Task');

exports.whatQuestion = function(req, res, next) {

    var uid = req.params.uid; // assume uid have to be known
    
    return res.json({
        message: 'Null'
    });
};

exports.whenQuestion = function(req, res, next) {

    return res.json({
        message: 'Hello World!'
    });
};

exports.whereQuestion = function(req, res, next){
    
    return res.json({
        message: 'Hello World!'
    });
};

exports.howMuchQuestion = function(req, res, next){
  
    return res.json({
        message: 'Hello World!'
    });
};

exports.todeliver = function(req, res, next) {

    res.render('takejob', { title: 'To Deliver' });
};

exports.inittakejob = function(req, res, next) {
    console.log("Deliver Route takejob");
    Task.find({}, function (err, jobs) {
        // docs is an array of partially-`init`d documents
        // defaults are still applied and will be "populated"
        // console.log(jobs);
        res.render('takejob', { title: 'Take Job', jobs: jobs });
    });
};

exports.takejob = function(req, res, next) {
    console.log("Deliver Route takejob");
    var id = req.query.id;
    if(id!=null){
        Task.findOneAndUpdate({_id: id}, function (err, jobs) {
            // docs is an array of partially-`init`d documents
            // defaults are still applied and will be "populated"
            // console.log(jobs);
            return res.json({
                takejob: true
            });
        });
    }
    return res.json({
                takejob: false
            });
};

exports.removejob = function(req, res, next) {
    console.log("Deliver Route removejob " + req.query.id);
    var id = req.query.id;
    Task.deleteOne({_id: id}, function (err, jobs) {
        // docs is an array of partially-`init`d documents
        // defaults are still applied and will be "populated"
        // console.log(jobs);
        res.render('takejob', { title: 'Take Job', jobs: jobs, removestatus: true });
    });
};