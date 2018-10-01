var express = require('express');
var router = express.Router();

// Require controller modules.
var apiController = require('../Controllers/ApiController');

// base
router.get('/', apiController.getApi);

module.exports = router;