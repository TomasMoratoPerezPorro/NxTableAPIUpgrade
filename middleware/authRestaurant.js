const { Restaurant, User } = require('../database_models/models');

const authRestaurantMiddleware = async (req, res, next) => {
  const { restaurantId } = req.body;

  if (!restaurantId) {
    return res.status(401).json({ msg: 'No restaurant Id, authorisation denied' });
  }

  try {
    // Fetch the restaurant with the given ID
    let restaurant = await Restaurant.findOne({
      include: User,
      where: { restaurantId: restaurantId }
    });
    if (!restaurant) {
      return res.status(401).json({ msg: 'Invalid restaurant Id, authorisation denied' });
    }
    let authorised = false;

    // Check if the loged in user has access to the restaurant
    restaurant.Users.forEach((user) => {
      if (user.UserRestaurant.userId == req.user.id) {
        console.log('IS MATCH');
        authorised = true;
        console.log(authorised);
        next();
      }
    });
    if (!authorised) {
      console.error('Unauthorised User');
      return res.status(400).json({ errors: [{ msg: 'Youre not authorised in this restauant' }] });
    }
  } catch (err) {
    console.error(err.message);
    next(err);
  }
};

module.exports = {
  authRestaurantMiddleware
};
