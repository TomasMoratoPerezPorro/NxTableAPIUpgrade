const { check, validationResult } = require('express-validator');
const errorHandler = require('../errorHanadler');

exports.validateLogin = [
  check('email', 'Please enter a valid email').isEmail(),
  check('password', 'Password is required').exists(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  }
];
