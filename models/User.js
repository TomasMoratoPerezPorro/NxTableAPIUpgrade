'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Restaurant, UserRole }) {
      this.belongsToMany(Restaurant, { through: 'UserRestaurant' });
      this.belongsTo(UserRole, { foreignKey: 'userroleId' });
    }

    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  User.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      identifier: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: 'users',
      modelName: 'User'
    }
  );
  return User;
};
