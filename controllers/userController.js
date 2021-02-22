const { userService } = require('../services');

const { userExists, encryptPassword, createUser, createToken } = userService;

// @route           POST api/users
// @description     Register a user
// @access          Public

const postUser = async (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    isAlreadySaved = await userExists(email);

    const encryptedPassword = await encryptPassword(password);

    const user = await createUser(
      email,
      encryptedPassword,
      firstName,
      lastName
    );

    const signedToken = await createToken(user.userId);

    res.json({ signedToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  postUser
};
