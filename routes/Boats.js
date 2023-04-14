var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Boats', { title: 'Search Results Boats' });
});
const boats_controlers= require('../controllers/boats');

router.get('/', boats_controlers.boats_view_all_Page );
module.exports = router;
