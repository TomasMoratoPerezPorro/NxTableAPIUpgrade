'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRestaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserRestaurant.init(
    {
      userId: {
        type: DataTypes.UUID,
        references: {
          model: 'User', // 'Users' would also work
          key: 'id'
        }
      },
      restaurantId: {
        type: DataTypes.UUID,
        references: {
          model: 'Restaurant', // 'Restaurants' would also work
          key: 'id'
        }
      }
    },
    {
      sequelize,
      tableName: 'userRestaurants',
      modelName: 'UserRestaurant'
    }
  );
  return UserRestaurant;
};
