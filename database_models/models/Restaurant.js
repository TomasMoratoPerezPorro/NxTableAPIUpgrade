'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Table, Client, Reservation, Service, Location }) {
      this.belongsToMany(User, { through: 'UserRestaurant', foreignKey: 'restaurantId' });
      this.belongsToMany(Location, { through: 'RestaurantLocation' });
      this.hasMany(Table, { foreignKey: 'restaurantId' });
      this.hasMany(Client, { foreignKey: 'restaurantId' });
      this.hasMany(Reservation, { foreignKey: 'restaurantId' });
      this.hasMany(Service, { foreignKey: 'restaurantId' });
    }

    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  Restaurant.init(
    {
      restaurantId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
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
