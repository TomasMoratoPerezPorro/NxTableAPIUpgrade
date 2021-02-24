const checkIfServiceNameIsRegistered = async (name) => {
  //Get Service By Name Database
  //If Service is null throw an error
};

const createService = async (restaurantId, name, comments, mealDurationTime) => {
  // Save service to database
};

const createWeekServiceSchedule = async (serviceId, weekSchedule) => {
  // For each array object save a new serviceSchedule in the database
};

module.exports = {
  checkIfServiceNameIsRegistered,
  createService,
  createWeekServiceSchedule
};
