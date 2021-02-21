const { userService } = require('../services');

const { userExists, encryptPassword, createUser, signToken } = userService;

// @route           POST api/users
// @description     Register a user
// @access          Public

const postUser = async (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    isAlreadySaved = await userExists(email);

    if (isAlreadySaved) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }

    const encryptedPassword = await encryptPassword(password);

    const userId = await createUser(
      email,
      encryptedPassword,
      firstName,
      lastName
    );

    const signedToken = await signToken(userId);

    res.json({ signedToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  postUser
};
