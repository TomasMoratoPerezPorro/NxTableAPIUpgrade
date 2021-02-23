const { createNewUserDb, userFindOneByEmailDb } = require('../database_access/userDb');
const bcrypt = require('bcryptjs');

const config = require('config');

const signToken = require('../utils/signToken');

const checkIfemailIsRegistered = async (email) => {
  try {
    const user = await userFindOneByEmailDb(email);

    if (user == null) {
      return false;
    } else {
      throw new Error('Email is already registered');
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
    let user = await createNewUserDb(email, encryptedPassword, firstName, lastName);

    return user;
  } catch (err) {
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
  checkIfemailIsRegistered,
  encryptPassword,
  createUser,
  createToken
};
