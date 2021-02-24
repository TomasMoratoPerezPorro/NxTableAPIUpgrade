const { serviceFindOneByNameDb, createNewServiceDb } = require('../database_access/serviceDb');

const checkIfServiceNameIsRegistered = async (restaurantId, name) => {
  try {
    const serviceInstance = await serviceFindOneByNameDb(restaurantId, name);
    if (serviceInstance !== null) {
      throw new Error('Service Name Registered');
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

const createService = async (restaurantId, name, comments, mealDurationTime) => {
  try {
    const serviceInstance = await createNewServiceDb(restaurantId, name, comments, mealDurationTime);
    return serviceInstance;
  } catch (error) {
    throw new Error(err.message);
  }
};

/* const createWeekServiceSchedule = async (serviceId, weekSchedule) => {
  // For each array object save a new serviceSchedule in the database
}; */

module.exports = {
  checkIfServiceNameIsRegistered,
  createService
  /* createWeekServiceSchedule */
};
