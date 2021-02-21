const { sequelize, User } = require('../database_models/models');

const findUserByEmailDb = async (email) => {
  try {
    let user = await User.findOne({
      where: { email: email }
    });
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

const saveUserDb = async (email, encryptedPassword, firstName, lastName) => {
  try {
    let user = User.build({
      email: email,
      password: encryptedPassword,
      firstName: firstName,
      lastName: lastName
    });

    await user.save();

    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  findUserByEmailDb,
  saveUserDb
};
