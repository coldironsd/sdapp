var Task = require('./../models/Task');
var deliverRouter = require('./deliver');

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

exports.tobuy = function(req, res, next) {

    var user = req.user;
    console.log("User: " + user);
    if(user!=null){
        console.log(user.name + user._id);
        res.render('tobuy', { title: 'To Buy', uid: user._id });
    }
    res.render('login', { title: 'Login' }); // <-- remove after ABU finished the authentication on URL.
    
    // return res.json({
    //     message: 'to buy'
    // });
};

exports.addRequest = function(req, res, next) {
    
    var type = req.body.jobType;
    var what = req.body.what;
    var when = req.body.whendate;
    var fromwhere = req.body.fromwhere;
    var towhere = req.body.towhere;
    var comment = req.body.comment;
    var userId = req.user._id;
    var cost = req.body.cost;
    var saveTask = new Task();
    console.log(userId);
    saveTask.userid = userId;
    saveTask.title = what;
    saveTask.fromwhere = fromwhere;
    saveTask.towhere = towhere;
    saveTask.time = when;
    saveTask.cost = cost;
    
    saveTask.description = comment;
    if(type == 1){
        saveTask.tobuy = true;
    }else{
        saveTask.todeliver = true;
    }
    
    saveTask.save(function (err, updatedTask) {
        if (err) return console.error(err);
        // res.render('takejob', { title: 'To Buy' });
        console.log("Delegate to deliverRouter: " + updatedTask._id);
        // res.send(deliverRouter.takejob(req,res,next));
        deliverRouter.takejob(req,res,next)
      });
    
    console.log('add request: ' + what + when + where);
    
    // return res.json({
    //     message: 'to buy'
    // });
};