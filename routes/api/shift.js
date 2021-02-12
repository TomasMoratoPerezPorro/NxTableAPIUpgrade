const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const authRestaurant = require('../../middleware/authRestaurant');

const { check, validationResult } = require('express-validator');

const { Service, ServiceShift } = require('../../models');

// @route           POST api/ServiceShift
// @description     Create a new ServiceShift
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
    let ServiceShiftInstance;
    try {
      const ServiceShift = ServiceShift.build({
        serviceId: serviceId,
        shiftNum: shiftNum,
        startingTime: startingTime,
        durationTime: durationTime
      });
      ServiceShiftInstance = await ServiceShift.save();
      console.log('ServiceShift was saved to the database!');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);
