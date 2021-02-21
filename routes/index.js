const express = require('express');
const auth = require('../middleware/auth');

const { userController } = require('../controllers');

const { userValidator } = require('../middleware/validators');

const router = express.Router();

// AUTH
/* router.post('/auth', authController.postAuthenticateUser);
router.get('/auth', auth, authController.getUserInfo); */

// USER
router.post('/user', userValidator.validateUser, userController.postUser);

module.exports = router;
