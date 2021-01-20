'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shift extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Reservation, Service }) {
      this.hasMany(Reservation, { foreignKey: 'shiftId' });
      this.belongsTo(Service, { foreignKey: 'serviceId' });
    }
  }
  Shift.init(
    {
      serviceId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      shiftNum: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      startingTime: {
        type: DataTypes.TIME,
        allowNull: false
      },
      durationTime: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: 'shifts',
      modelName: 'Shift'
    }
  );
  return Shift;
};
