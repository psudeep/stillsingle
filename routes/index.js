/*
@Company: Still Single
@Author: Prashant Sudeep
*/

var express = require('express');
var router = express.Router();
var RestController = require('./../controllers/RestController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Still Single - Mingle Here' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About | Still Single - Mingle Here' });
});
router.get('/privacy', function(req, res, next) {
  res.render('soon', { title: 'Privacy | Still Single - Coming Soon' });
});
router.get('/terms', function(req, res, next) {
  res.render('soon', { title: 'Terms | Still Single - Coming Soon' });
});
router.get('/help', function(req, res, next) {
  res.render('soon', { title: 'FAQs | Still Single - Coming Soon' });
});

router.get('/restApi/get', RestController.makeGetCalls);

module.exports = router;
