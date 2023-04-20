var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Boats', { title: 'Search Results Boats' });
});
const boats_controlers= require('../controllers/boats');

router.get('/', boats_controlers.boats_view_all_Page );

router.get('/detail', boats_controlers.boats_view_one_Page);

router.get('/create', boats_controlers.boats_create_Page);

/* GET update Boats page */ 
router.get('/update', boats_controlers.boats_update_Page); 

/* GET delete Boats page */ 
router.get('/delete',boats_controlers.boats_delete_Page);

module.exports = router;
