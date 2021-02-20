'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Location }) {
      this.hasMany(Location, { foreignKey: 'cityId' });
    }
  }
  City.init(
    {
      cityId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      countryCode: {
        type: DataTypes.STRING(3),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: 'cities',
      modelName: 'City'
    }
  );
  return City;
};
