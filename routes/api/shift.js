const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const authRestaurant = require('../../middleware/authRestaurant');

const { check, validationResult } = require('express-validator');

const { Service, ServiceSchedule } = require('../../models');

// @route           POST api/shift
// @description     Create a new shift
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
  async (req, res) => {}
);
