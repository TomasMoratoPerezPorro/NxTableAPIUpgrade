const { userDb } = require('../database_access');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const userExists = async (email) => {
  try {
    let user = await userDb.findUserByEmailDb(email);

    if (user == null) {
      return false;
    } else {
      return true;
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

const encryptPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    return password;
  } catch (err) {
    throw new Error(err.message);
  }
};

const createUser = async (email, encryptedPassword, firstName, lastName) => {
  try {
    let user = await saveUserDb(email, encryptedPassword, firstName, lastName);
    return user.id;
  } catch (err) {
    throw new Error(err.message);
  }
};

const signToken = async (userId) => {
  const payload = {
    user: {
      id: userId
    }
  };
  try {
    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw err;
        return json({ token });
      }
    );
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  userExists,
  encryptPassword,
  createUser,
  signToken
};
