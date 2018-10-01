var express = require('express');
var router = express.Router();

// Require controller modules.
var userController = require('../Controllers/UserController');

// user
router.get('/', userController.getUsers);
router.get('/:username', userController.getUser);
router.post('/', userController.postUser);
router.put('/:username', userController.putUser);
router.patch('/:username', userController.patchUser);
router.delete('/:username', userController.deleteUser);

module.exports = router;