var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET about page. */
router.get('/', function (req, res, next) {
  res.render('about', { title: 'about' });
});

module.exports = router;
