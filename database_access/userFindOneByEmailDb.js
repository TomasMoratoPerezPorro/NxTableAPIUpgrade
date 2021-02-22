const { sequelize, User } = require('../database_models/models');

const userFindOneByEmailDb = async (email) => {
  try {
    let user = await User.findOne({
      where: { email: email }
    });

    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  userFindOneByEmailDb
};
