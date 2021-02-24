const {
  checkIfServiceNameIsRegistered,
  createService
  /* createWeekServiceSchedule */
} = require('../services/serviceService');

const registerNewService = async (req, res, next) => {
  const { restaurantId, name, comments, mealDurationTime, weekSchedule } = req.body;
  try {
    await checkIfServiceNameIsRegistered(restaurantId, name);

    const service = await createService(restaurantId, name, comments, mealDurationTime);

    /* const serviceSchedule = await createWeekServiceSchedule(weekSchedule); */

    res.json({ service });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  registerNewService
};
