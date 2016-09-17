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

router.get('/restApi/get', RestController.makeGetCalls);

module.exports = router;
