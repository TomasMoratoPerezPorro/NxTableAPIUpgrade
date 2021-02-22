const { authService } = require('../services');

const { userIsRegistered, matchPassword, createToken } = authService;

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // 1 Check if the user exists
    let user = await userIsRegistered(email);

    //Match email and password
    await matchPassword(password, user.password);

    // 4 Return jsonwebtoken
    const token = await createToken(user.userId);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error: ' + err.message);
  }
};

module.exports = {
  loginUser
};
