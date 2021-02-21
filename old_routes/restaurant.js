const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const { Restaurant, User } = require('../../models');

// @route           POST api/restaurant
// @description     Create a new restaurant and set the relation betwen user and restaurant
// @access          Private

router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('location', 'Location is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, location, description } = req.body;
    try {
      let restaurant = await Restaurant.findOne({
        where: { name: name }
      });

      if (restaurant != null) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'This restaurant name already exists' }] });
      }

      restaurant = Restaurant.build({
        name: name,
        location: location,
        description: description
      });

      const restaurantInstance = await restaurant.save();
      console.log('Restaurant was saved to the database!');

      const userInstance = await User.findOne({
        where: { id: req.user.id }
      });

      await restaurantInstance.addUser(userInstance);

      res.json(restaurant);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
