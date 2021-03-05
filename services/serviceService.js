const {
  serviceFindOneByNameDb,
  createNewServiceDb,
  createNewSeviceScheduleDb,
} = require("../database_access/serviceDb");

const checkIfServiceNameIsRegistered = async (restaurantId, name) => {
  try {
    const serviceInstance = await serviceFindOneByNameDb(restaurantId, name);
    if (serviceInstance !== null) {
      throw new Error("Service Name Registered");
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

const createService = async (
  restaurantId,
  name,
  comments,
  mealDurationTime
) => {
  try {
    const serviceInstance = await createNewServiceDb(
      restaurantId,
      name,
      comments,
      mealDurationTime
    );
    return serviceInstance;
  } catch (error) {
    throw new Error(err.message);
  }
};

const createWeekServiceSchedule = async (serviceId, weekSchedule) => {

  const weekScheduleArray = weekSchedule.map(day =>{
    console.log(JSON.stringify(day))
    return day
  })

  console.log(JSON.stringify(weekScheduleArray));
  // For each array object save a new serviceSchedule in the database
  for (const day of weekSchedule) {
    try {
      const { openingTime, lastAdmisionTime, weekDay } = day;
      const seviceScheduleInstance = await createNewSeviceScheduleDb(
        serviceId,
        openingTime,
        lastAdmisionTime,
        weekDay
      );
    } catch (err) {
      throw new Error(err.message);
    }
  }
};

module.exports = {
  checkIfServiceNameIsRegistered,
  createService,
  createWeekServiceSchedule
};
