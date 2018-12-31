var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
//   res.render('login', { title: 'SD' });
    res.render('index', { title: 'SD' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('login', { title: 'SD' });
    res.render('index', { title: 'SD' });
});

module.exports = router;
