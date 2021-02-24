const { check, validationResult } = require('express-validator');

exports.validateServiceCreation = [
  check('restaurantId', 'Restaurant Id is required').exists(),
  check('name', 'name is required').exists(),
  check('mealDurationTime', 'Meal Duration is required').exists(),
  check('weekSchedule', 'weekSchedule is required').exists(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
];
