var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'N|Solid 2.0 on Heroku' });
});

/* GET ns page. */
router.get('/ns', function(req, res, next) {

  var nsolid_version = process.versions.nsolid

  res.render('sanity', { 
    nsolid_version: nsolid_version, 
    title: 'N|Solid 2.0 on Heroku' 
  });
});

module.exports = router;
