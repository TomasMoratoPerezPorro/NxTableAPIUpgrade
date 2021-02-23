const { sequelize, User } = require('../database_models/models');

const userFindOneByEmailDb = async (email) => {
  try {
    const userInstance = await User.findOne({
      where: { email: email }
    });

    if (!userInstance) {
      throw new Error('User not found');
    }

    return userInstance.toJSON();
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  userFindOneByEmailDb
};
