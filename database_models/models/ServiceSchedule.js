'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceSchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Service }) {
      this.belongsTo(Service, { foreignKey: 'serviceId' });
    }
  }
  ServiceSchedule.init(
    {
      serviceScheduleId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      openingTime: {
        type: DataTypes.TIME,
        allowNull: false
      },
      lastAdmisionTime: {
        type: DataTypes.TIME,
        allowNull: false
      },
      weekDay: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      isVacation: {
        type: DataTypes.BOOLEAN
      }
    },
    {
      sequelize,
      tableName: 'serviceSchedules',
      modelName: 'ServiceSchedule'
    }
  );
  return ServiceSchedule;
};
