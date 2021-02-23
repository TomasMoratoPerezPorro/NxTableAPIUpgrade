const { check, validationResult } = require('express-validator');

exports.validateRestaurantCreation = [
  check('name', 'Name is required').exists(),
  check('description', 'Description is required').exists(),
  check('streetType', 'StreetType is required').exists(),
  check('streetName', 'streetName is required').exists(),
  check('streetNumber', 'StreetNumber is required').exists(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
];
