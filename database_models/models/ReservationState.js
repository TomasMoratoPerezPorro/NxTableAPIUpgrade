'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReservationState extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Reservation }) {
      this.hasMany(Reservation, { foreignKey: 'reservationStateId' });
    }
  }
  ReservationState.init(
    {
      reservationStateId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      stateName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      stateColour: {
        type: DataTypes.CHAR,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: 'reservationStates',
      modelName: 'ReservationState'
    }
  );
  return ReservationState;
};
