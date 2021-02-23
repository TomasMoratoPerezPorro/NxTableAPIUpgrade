const { userService } = require('../services');

const { checkIfemailIsRegistered, encryptPassword, createUser, createToken } = userService;

// @route           POST api/users
// @description     Register a user
// @access          Public

const registerNewUser = async (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    await checkIfemailIsRegistered(email);

    const encryptedPassword = await encryptPassword(password);

    const user = await createUser(email, encryptedPassword, firstName, lastName);

    const signedToken = await createToken(user.userId);

    res.json({ signedToken });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  registerNewUser
};
