const { restaurantService } = require('../services');

const { checkIfNameIsRegistered, createRestaurant, addUserToRestaurant } = restaurantService;

const registerNewRestaurant = async (req, res, next) => {
  const { name, description, streetType, streetName, streetNumber } = req.body;
  const userId = req.user.id;
  try {
    // Check if name is registered
    await checkIfNameIsRegistered(name);
    // Create Restaurant
    const restaurant = await createRestaurant(name, description, streetType, streetName, streetNumber);
    // Create relation between restaurant and user entities
    const user = await addUserToRestaurant(userId, restaurant.restaurantId);
    // Return restaurant object created
    res.json({ restaurant });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  registerNewRestaurant
};
