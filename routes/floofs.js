var express = require('express');
const app = require('../app');
var router = express.Router();
var AOS = require('aos');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('floofs', { title: 'Floofs' });
});

// AOS.init();

module.exports = router;
