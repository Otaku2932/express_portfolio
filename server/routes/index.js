var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome!', content: 'Welcome! This is a website introducing me; Chadwick Lapis', img1: '/assets/images/20200203_134417.jpg' ,img2: '/assets/images/20200307_141832.jpg', img3: '/assets/images/WIN_20201009_19_52_10_Pro.jpg', img1label: 'Beachfront Park Pickering', img2label: 'Gourmet Malaysia', img3label: 'This is Me'});
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Welcome!', content: 'Welcome! This is a website introducing me; Chadwick Lapis', img1: '/assets/images/20200203_134417.jpg' ,img2: '/assets/images/20200307_141832.jpg', img3: '/assets/images/WIN_20201009_19_52_10_Pro.jpg', img1label: 'Beachfront Park Pickering', img2label: 'Gourmet Malaysia', img3label: 'This is Me'});
});
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me', content: 'I am an avid strategy gamer. I\'ve been in Canada for 13 years now and in the Game Programming Course. I\'ve previously graduated from the Networking Course of Centennial but have gained interest in programming as I progressed through it.', img1: '/assets/images/Gaming.JPG', img2: '/assets/images/20200229_163441.jpg', img3: '/assets/images/WIN_20201009_19_52_10_Pro.jpg', img1label: 'strategy gamer', img2label: 'filipino food', img3label: 'a game programming student'});
});
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me', content: 'Contact me through Discord: otaku2932#5782 Email: c_lapis4@hotmail.com', img1: '/assets/images/WIN_20201009_19_52_10_Pro.jpg', img2: '/assets/images/20190515_224121.jpg', img3: '/assets/images/102219_1135_TCPIPvsOSIM1.png', img1label: 'This is Me', img2label: 'Sterling Road Nestle', img3label: 'Most Basic Networking Picture'});
});
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects', content: 'Currently I am doing modding for Civilization 5 skirmish game mode, and Asset Creation with VR Chat', img1: '/assets/images/avatarAnim.gif', img2: '/assets/images/civmodding.JPG', img3: '/assets/images/LouON.JPG', img1label: 'Avatar Custom Animation', img2label: 'Civ 5 Modding', img3label: 'VR Chat Avatar Creation'});
});
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services', content: 'I can make basic avatar for VR Chat, and  Stream gaming content on https://www.twitch.tv/otaku2932', img1: '/assets/images/Twitch.JPG' , img2: '/assets/images/LouON.JPG', img3: '/assets/images/streaming.gif', img1label: 'Twitch Channel', img2label: 'VR Chat Avatar Creation', img3label: 'Twitch Stream'});
});

module.exports = router;
