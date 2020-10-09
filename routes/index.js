var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '<i class="fas fa-torii-gate"></i> Welcome!', content: 'Welcome!'});
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: '<i class="fas fa-torii-gate"></i> Welcome!', content: ''});
});
router.get('/about', function(req, res, next) {
  res.render('index', { title: '<i class="fas fa-user-graduate"></i> About Me', content: ''});
});
router.get('/contact', function(req, res, next) {
  res.render('index', { title: '<i class="fas fa-paper-plane"></i> Contact Me', content: ''});
});
router.get('/projects', function(req, res, next) {
  res.render('index', { title: '<i class="fas fa-pause-circle"></i> Projects', content: ''});
});
router.get('/services', function(req, res, next) {
  res.render('index', { title: '<i class="fab fa-twitch"></i> Services', content: ''});
});


module.exports = router;
