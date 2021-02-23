const {
  restaurantFindOneByNameDb,
  createNewRestaurantDb,
  createNewUserRestaurantDb
} = require('../database_access/restaurantDb');

const checkIfNameIsRegistered = async (name) => {
  try {
    const restaurant = await restaurantFindOneByNameDb(name);

    if (restaurant == null) {
      return false;
    } else {
      throw new Error('Restaurant name is already registered');
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

const createRestaurant = async (name, description, streetType, streetName, streetNumber) => {
  try {
    const restaurant = await createNewRestaurantDb(name, description, streetType, streetName, streetNumber);

    return restaurant;
  } catch (err) {
    throw new Error(err.message);
  }
};

const addUserToRestaurant = async (userId, restaurantId) => {
  try {
    const userRestaurant = await createNewUserRestaurantDb(userId, restaurantId);
    return userRestaurant;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  checkIfNameIsRegistered,
  createRestaurant,
  addUserToRestaurant
};
