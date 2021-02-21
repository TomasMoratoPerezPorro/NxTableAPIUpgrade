'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TableReservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TableReservation.init(
    {
      tableId: {
        type: DataTypes.UUID,
        references: {
          model: 'Table',
          key: 'tableId'
        }
      },
      reservationId: {
        type: DataTypes.UUID,
        references: {
          model: 'Reservation',
          key: 'reservationId'
        }
      }
    },
    {
      sequelize,
      tableName: 'tableReservation',
      modelName: 'TableReservation'
    }
  );
  return TableReservation;
};
