var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('views/index.ejs', { title: 'ABM' });
});

module.exports = router;
