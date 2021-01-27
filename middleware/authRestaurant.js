const { Restaurant, User } = require('../models');

module.exports = async function (req, res, next) {
  const { restaurantUuid } = req.body;

  if (!restaurantUuid) {
    return res
      .status(401)
      .json({ msg: 'No restaurant uuid, authorisation denied' });
  }

  try {
    // Fetch the restaurant with the given UUID
    let restaurant = await Restaurant.findOne({
      include: User,
      where: { uuid: restaurantUuid }
    });
    if (!restaurant) {
      return res
        .status(401)
        .json({ msg: 'No restaurant uuid, authorisation denied' });
    }
    let authorised = false;

    // Check if the loged in user has access to the restaurant
    restaurant.Users.forEach((user) => {
      if (user.UserRestaurant.userId == req.user.id) {
        console.log('IS MATCH');
        authorised = true;
        console.log(authorised);

        // Atach the restaurant id to the req object for future operations
        req.restaurantId = restaurant.id;
        console.log(req.restaurantId);
        next();
      }
    });
    if (!authorised) {
      console.error('Unauthorised User');
      return res
        .status(400)
        .json({ errors: [{ msg: 'Youre not authorised in this restauant' }] });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
