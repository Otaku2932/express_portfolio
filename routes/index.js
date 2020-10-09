var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', content: 'Hi Im Chadwick'});
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', content: ''});
});

module.exports = router;
