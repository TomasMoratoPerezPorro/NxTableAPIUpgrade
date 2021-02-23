const express = require('express');
const { authMiddleware } = require('../middleware/auth');

const { userController, authController, restaurantController } = require('../controllers');

const { userValidator, authValidator, restaurantValidator } = require('../middleware/validators');

const router = express.Router();

// AUTH
router.post('/auth', authValidator.validateLogin, authController.loginUser);

// USER
router.post('/user', userValidator.validateUser, userController.registerNewUser);

// RESTAURANT
router.post(
  '/restaurant',
  authMiddleware,
  restaurantValidator.validateRestaurantCreation,
  restaurantController.registerNewRestaurant
);

module.exports = router;
