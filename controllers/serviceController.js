const {
  checkIfServiceNameIsRegistered,
  createService,
  createWeekServiceSchedule
} = require('../services/serviceService');

const registerNewService = async (req, res, next) => {
  const { restaurantId, name, comments, mealDurationTime, weekSchedule } = req.body;
  try {
    // Check if there is a service with same name
    await checkIfServiceNameIsRegistered(name);
    // Save service to the database
    const service = await createService(restaurantId, name, comments, mealDurationTime);
    // Save service Schedule to the database
    const serviceSchedule = await createWeekServiceSchedule(weekSchedule);

    res.json({ service });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  registerNewService
};
