const express = require('express');
const { authMiddleware } = require('../middleware/auth');

const { authRestaurantMiddleware } = require('../middleware/authRestaurant');

const { userController, authController, restaurantController, serviceController } = require('../controllers');

const { userValidator, authValidator, restaurantValidator, serviceValidator } = require('../middleware/validators');

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

//SERVICE
router.post(
  '/service',
  authMiddleware,
  serviceValidator.validateServiceCreation,
  authRestaurantMiddleware,
  serviceController.registerNewService
);

module.exports = router;
