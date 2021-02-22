const { createNewUserDb } = require('../database_access');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { userFindOneByEmailDb } = require('../database_access');

const userExists = async (email) => {
  try {
    let user = await userFindOneByEmailDb(email);

    if (user == null) {
      return false;
    } else {
      throw new Error("{ errors: [{ msg: 'User already exists' }] }");
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
    let user = await createNewUserDb(
      email,
      encryptedPassword,
      firstName,
      lastName
    );

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

const signToken = async (payload, privatekey) => {
  const promise = new Promise((resolve, reject) => {
    jwt.sign(payload, privatekey, { expiresIn: 3600 }, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });

  return promise;
};

module.exports = {
  userExists,
  encryptPassword,
  createUser,
  createToken
};
