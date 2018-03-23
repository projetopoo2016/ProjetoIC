var express = require('express')
var router = express.Router()


/* GET home page. */
router.get('/', function(req, res) {
    res.render('index');

  });
  
  router.get('/about', function(req, res) {
    res.render('about');
  });

  router.get('/survey', function(req, res) {
    res.render('survey');
  });
  
  router.get('/surveyeditor', function(req, res) {
    res.render('surveyeditor');
  });

  router.get('/resultados', function(req, res) {
    res.render('resultados');
  });

  router.get('/pricing', function(req, res) {
    res.render('pricing');
  });

  router.get('/login', function(req, res) {
    res.render('login');
  });
  module.exports = router;