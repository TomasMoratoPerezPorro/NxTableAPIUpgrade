const { userFindOneByEmailDb } = require('../database_access/userDb');
const signToken = require('../utils/signToken');
const bcrypt = require('bcryptjs');
const config = require('config');

const userIsRegistered = async (email) => {
  try {
    let user = await userFindOneByEmailDb(email);

    if (user == null) {
      throw new Error('Invalid email');
    } else {
      return user;
    }
  } catch (err) {
    console.error(err.message);
    throw new Error(err.message);
  }
};

const matchPassword = async (inputPassword, dbPassword) => {
  try {
    const isMatch = await bcrypt.compare(inputPassword, dbPassword);

    if (!isMatch) {
      throw new Error('Invalid password');
    } else {
      return isMatch;
    }
  } catch (err) {
    console.error(err.message);
    throw new Error(err.message);
  }
};

const createToken = async (userId) => {
  const payload = {
    user: {
      id: userId
    }
  };

  try {
    const token = await signToken(payload, config.get('jwtSecret'));
    return token;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  userIsRegistered,
  matchPassword,
  createToken
};
