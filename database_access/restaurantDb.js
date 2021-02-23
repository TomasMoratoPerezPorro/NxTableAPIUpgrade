const { sequelize, Restaurant, User } = require('../database_models/models');

const restaurantFindOneByNameDb = async (name) => {
  try {
    const restaurantInstance = await Restaurant.findOne({
      where: { name: name }
    });

    if (!restaurantInstance) {
      return;
    }

    return restaurantInstance.toJSON();
  } catch (err) {
    throw new Error(err.message);
  }
};

const createNewRestaurantDb = async (name, description, streetType, streetName, streetNumber) => {
  let restaurantInstance;
  try {
    restaurantInstance = await Restaurant.create({
      name: name,
      description: description,
      streetType: streetType,
      streetName: streetName,
      streetNumber: streetNumber
    });

    return restaurantInstance.toJSON();
  } catch (err) {
    throw new Error(err.message);
  }
};

const createNewUserRestaurantDb = async (userId, restaurantId) => {
  try {
    console.log('UserId IN DB' + userId);
    const userInstance = await User.findOne({
      where: { userId }
    });

    const restaurantInstance = await Restaurant.findOne({
      where: { restaurantId }
    });

    await restaurantInstance.addUser(userInstance);

    return restaurantInstance.toJSON();
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  restaurantFindOneByNameDb,
  createNewRestaurantDb,
  createNewUserRestaurantDb
};
