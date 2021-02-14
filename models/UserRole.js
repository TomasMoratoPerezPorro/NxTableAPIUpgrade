'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.hasMany(User, { foreignKey: 'userRoleId' });
    }
  }
  UserRole.init(
    {
      roleName: DataTypes.STRING
    },
    {
      sequelize,
      tableName: 'userRoles',
      modelName: 'UserRole'
    }
  );
  return UserRole;
};
