const { sequelize, Service } = require('../database_models/models');

const createNewServiceDb = async (restaurantId, name, comments, mealDurationTime) => {
  try {
    console.log('createNewServiceDb:  \n');
    let serviceInstance = await Service.create({
      restaurantId: restaurantId,
      name: name,
      comments: comments,
      mealDurationMins: mealDurationTime
    });

    return serviceInstance.toJSON();
  } catch (err) {
    throw new Error(err.message);
  }
};

const serviceFindOneByNameDb = async (restaurantId, name) => {
  console.log('serviceFindOneByNameDb:  \n');
  try {
    const serviceInstance = await Service.findOne({
      where: {
        restaurantId: restaurantId,
        name: name
      }
    });
    if (serviceInstance instanceof Service) {
      return serviceInstance;
    } else {
      return null;
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

const createNewServiceSchedule = async (serviceId, openingTime, lastAdmisionTime, weekDay, isVacation) => {};

module.exports = {
  createNewServiceDb,
  serviceFindOneByNameDb,
  createNewServiceSchedule
};
