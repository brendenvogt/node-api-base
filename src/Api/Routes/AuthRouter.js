var express = require('express');
var router = express.Router();

// Require controller modules.
var controller = require('../Controllers/AuthController');

router.post('/login', controller.login);
router.post('/signup', controller.signup);
router.post('/refresh', controller.refresh);

module.exports = router;