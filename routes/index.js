var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Prof System - ferestre pentru o viata !' });
});

/* GET home index page. */
router.get('/index.html', function(req, res, next) {
  res.render('index', { title: 'Prof System - ferestre pentru o viata !' });
});

/* GET generic page. */
router.get('/generic.html', function(req, res, next) {
  res.render('generic', { title: 'Generic !' });
});

/* GET elements page. */
router.get('/elements.html', function(req, res, next) {
  res.render('elements', { title: 'Elements!' });
});
module.exports = router;
