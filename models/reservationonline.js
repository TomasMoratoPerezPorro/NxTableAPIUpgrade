'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReservationOnline extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Reservation }) {
      this.belongsTo(Reservation, { foreignKey: 'reservationId' });
    }
  }
  ReservationOnline.init(
    {
      isAssigned: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: 'reservationOnlines',
      modelName: 'ReservationOnline'
    }
  );
  return ReservationOnline;
};
