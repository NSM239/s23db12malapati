var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var boats_controller = require('../controllers/boats');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// boats ROUTES ///
// POST request for creating a boats.
router.post('/boats', boats_controller.boats_create_post);
// DELETE request to delete boats.
router.delete('/boats/:id', boats_controller.boats_delete);
// PUT request to update boats.
router.put('/boats/:id', boats_controller.boats_update_put);
// GET request for one boats.
router.get('/boats/:id', boats_controller.boats_detail);
// GET request for list of all boats items.
router.get('/boats', boats_controller.boats_list);
module.exports = router;