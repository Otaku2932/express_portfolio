var express = require('express');
var router = express.Router();

router.get('/about', function(req, res, next) {
    res.render('index', { title: 'About Me', content: ''});
});

module.exports = router;