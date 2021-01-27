const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const authRestaurant = require('../../middleware/authRestaurant');

const { check, validationResult } = require('express-validator');

const { sequelize, Restaurant, User, Service } = require('../../models');

// @route           POST api/service
// @description     Create a new service
// @access          Private

router.post(
  '/',
  [
    auth,
    authRestaurant,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('comments', 'Comments are required').not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, comments } = req.body;

    try {
      service = Service.build({
        restaurantId: req.restaurantId,
        name: name,
        comments: comments
      });
      serviceInstance = await service.save();
      console.log('Service was saved to the database!');
      res.json(serviceInstance);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
