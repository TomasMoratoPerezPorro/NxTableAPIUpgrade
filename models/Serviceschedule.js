'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceSchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Service, WeekDay }) {
      this.belongsTo(Service, { foreignKey: 'serviceId' });
      this.hasMany(WeekDay, { foreignKey: 'servicescheduleId' });
    }
  }
  ServiceSchedule.init(
    {
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
      tableName: 'serviceschedules',
      modelName: 'ServiceSchedule'
    }
  );
  return ServiceSchedule;
};
