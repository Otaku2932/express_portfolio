var express = require('express');
var router = express.Router();

router.get('/projects', function(req, res, next) {
    res.render('index', { title: 'Projects', content: ''});
});

module.exports = router;