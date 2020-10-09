var express = require('express');
var router = express.Router();

router.get('/services', function(req, res, next) {
    res.render('index', { title: 'Services', content: ''});
});

module.exports = router;