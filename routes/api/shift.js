const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const authRestaurant = require('../../middleware/authRestaurant');

const { check, validationResult } = require('express-validator');

const { Service, Shift } = require('../../models');

// @route           POST api/shift
// @description     Create a new shift
// @access          Private

router.post(
  '/',
  [
    auth,
    authRestaurant,
    [
      check('shiftNum', 'Name is required').not().isEmpty(),
      check('serviceId', 'You must provide a Service Id').not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    /// TODO
    const { serviceId, shiftNum, startingTime, durationTime } = req.body;
    let shiftInstance;
    try {
      const shift = Shift.build({
        serviceId: serviceId,
        shiftNum: shiftNum,
        startingTime: startingTime,
        durationTime: durationTime
      });
      shiftInstance = await Shift.save();
      console.log('Shift was saved to the database!');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);
