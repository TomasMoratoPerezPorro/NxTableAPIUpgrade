'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Table, Client, Reservation, Service }) {
      this.belongsToMany(User, { through: 'UserRestaurant' });
      this.hasMany(Table, { foreignKey: 'restaurantId' });
      this.hasMany(Client, { foreignKey: 'restaurantId' });
      this.hasMany(Reservation, { foreignKey: 'restaurantId' });
      this.hasMany(Service, { foreignKey: 'restaurantId' });
    }
  }
  Restaurant.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      sequelize,
      tableName: 'restaurants',
      modelName: 'Restaurant'
    }
  );
  return Restaurant;
};
