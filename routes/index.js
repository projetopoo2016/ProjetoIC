var express = require('express')
var router = express.Router()


/* GET home page. */
router.get('/', function(req, res) {
    res.render('main');
  });
  router.get('/about', function(req, res) {
    res.render('about');
  });

  module.exports = router;