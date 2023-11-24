var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET work page. */
router.get('/', function (req, res, next) {
  res.render('work', { title: 'work' });
});

module.exports = router;
