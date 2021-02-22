const { sequelize, User } = require('../database_models/models');

const createNewUserDb = async (
  email,
  encryptedPassword,
  firstName,
  lastName
) => {
  const defaultUserRoleId = '9dd1d40a-e11f-46bc-acbb-133a14364f90'; // SAME ID ADMIN SEED
  let userInstance;
  try {
    userInstance = await User.create({
      email: email,
      userRoleId: defaultUserRoleId,
      password: encryptedPassword,
      firstName: firstName,
      lastName: lastName
    });

    return userInstance.toJSON();
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  createNewUserDb
};
