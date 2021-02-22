const { sequelize, User } = require('../database_models/models');

const userFindOneByEmailDb = async (email) => {
  try {
    let userInstance = await User.findOne({
      where: { email: email }
    });

    return userInstance.toJSON();
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  userFindOneByEmailDb
};
