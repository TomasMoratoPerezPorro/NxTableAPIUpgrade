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
      userRoleId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      roleName: {
        type: DataTypes.STRING(20),
        allowNull: false
      }
    },
    {
      timestamps: false,
      sequelize,
      tableName: 'userRoles',
      modelName: 'UserRole'
    }
  );
  return UserRole;
};
