'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Table, Restaurant, Client, Service, Shift }) {
      // define association here
      this.belongsToMany(Table, { through: 'TableReservation' });
      this.belongsTo(Restaurant, { foreignKey: 'restaurantId' });
      this.belongsTo(Client, { foreignKey: 'clientId' });
      this.belongsTo(Service, { foreignKey: 'serviceId' });
      this.belongsTo(Shift, { foreignKey: 'shiftId' });
    }
  }
  Reservation.init(
    {
      /* clientId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      serviceId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      shiftId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      restaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }, */
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      startingTime: {
        type: DataTypes.TIME,
        allowNull: false
      },
      numberOfDinners: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      state: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      comments: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: 'reservations',
      modelName: 'Reservation'
    }
  );
  return Reservation;
};
