var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET contact page. */
router.get('/', function (req, res, next) {
  res.render('contact', { title: 'contact' });
});

module.exports = router;
