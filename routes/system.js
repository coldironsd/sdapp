/**
 * This function is use for testing.
 * */
exports.hellowWorld = function(req, res) {

    return res.json({
        message: 'Hello World!'
    });
};

exports.pay = function(req, res, next) {

    var uid = req.params.uid; // assume uid have to be known
   
    return res.json({
        message: 'Null'
    });
};

exports.findMatch = function(req, res, next) {

    return res.json({
        message: 'FIND MATCH!'
    });
};

exports.confirm = function(req, res, next){
    
    return res.json({
        message: 'Null'
    });
};

exports.roleQuestion = function(req, res, next){
  
    
    
    return res.json({
        message: 'Null'
    });
};

exports.start = function(req, res, next){
    
    return res.json({
        message: 'Welcome to social delivery.  Please select one of the role.'
    });
}