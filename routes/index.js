const express = require('express');
const auth = require('../middleware/auth');

const { userController, authController } = require('../controllers');

const { userValidator, authValidator } = require('../middleware/validators');

const router = express.Router();

// AUTH
router.post('/auth', authValidator.validateLogin, authController.loginUser);

// USER
router.post('/user', userValidator.validateUser, userController.postUser);

module.exports = router;
