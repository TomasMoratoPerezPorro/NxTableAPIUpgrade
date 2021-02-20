'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RestaurantLocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RestaurantLocation.init(
    {
      restaurantId: {
        type: DataTypes.UUID,
        references: {
          model: 'Restaurant', // 'Users' would also work
          key: 'restaurantId'
        }
      },
      locationId: {
        type: DataTypes.UUID,
        references: {
          model: 'Location', // 'Users' would also work
          key: 'locationId'
        }
      }
    },
    {
      sequelize,
      tableName: 'restaurantLocations',
      modelName: 'RestaurantLocation'
    }
  );
  return RestaurantLocation;
};
