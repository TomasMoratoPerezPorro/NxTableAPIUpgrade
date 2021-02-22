'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ City, Restaurant }) {
      this.belongsTo(City, { foreignKey: 'cityId' });
      this.belongsToMany(Restaurant, { through: 'RestaurantLocation' });
    }
  }
  Location.init(
    {
      locationId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      streetType: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      streetName: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      streetNumber: {
        type: DataTypes.STRING(5),
        allowNull: false
      },
      zipCode: {
        type: DataTypes.STRING(10),
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: 'locations',
      modelName: 'Location'
    }
  );
  return Location;
};
