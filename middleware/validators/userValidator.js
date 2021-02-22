const { check, validationResult } = require('express-validator');

exports.validateUser = [
  check('firstName', 'First Name is required').not().isEmpty(),
  check('lastName', 'First Name is required').not().isEmpty(),
  check('email', 'Please enter a valid email').isEmail(),
  check('password', 'Enter a password with more than 6 characters').isLength({
    min: 6
  }),
  /* check('role', 'Role is required').not().isEmpty(), */

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  }
];
