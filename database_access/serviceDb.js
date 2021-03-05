const {
  sequelize,
  Service,
  ServiceSchedule,
} = require("../database_models/models");

const createNewServiceDb = async (
  restaurantId,
  name,
  comments,
  mealDurationTime
) => {
  try {
    console.log("createNewServiceDb:  \n");
    let serviceInstance = await Service.create({
      restaurantId: restaurantId,
      name: name,
      comments: comments,
      mealDurationMins: mealDurationTime,
    });

    return serviceInstance.toJSON();
  } catch (err) {
    throw new Error(err.message);
  }
};

const serviceFindOneByNameDb = async (restaurantId, name) => {
  console.log("serviceFindOneByNameDb:  \n");
  try {
    const serviceInstance = await Service.findOne({
      where: {
        restaurantId: restaurantId,
        name: name,
      },
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

const createNewSeviceScheduleDb = async (
  serviceId,
  openingTime,
  lastAdmisionTime,
  weekDay
) => {
  try {
    const serviceScheduleInstance = await ServiceSchedule.create({
      serviceId: serviceId,
      openingTime: openingTime,
      lastAdmisionTime: lastAdmisionTime,
      weekDay: weekDay,
      isVacation: false,
    });

    return serviceScheduleInstance.toJSON();
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  createNewServiceDb,
  serviceFindOneByNameDb,
  createNewSeviceScheduleDb,
};
