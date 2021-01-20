'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceSchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ServiceSchedule.init(
    {
      serviceId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      openingTime: {
        type: Sequelize.TIME,
        allowNull: false
      },
      lastAdmisionTime: {
        type: Sequelize.TIME,
        allowNull: false
      },
      weekDay: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      isVacation: {
        type: Sequelize.BOOLEAN
      }
    },
    {
      sequelize,
      tableName: 'serviceSchedule',
      modelName: 'ServiceSchedule'
    }
  );
  return ServiceSchedule;
};
