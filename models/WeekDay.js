'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WeekDay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ ServiceSchedule }) {
      this.hasOne(ServiceSchedule, { foreignKey: 'weekdayId' });
    }
  }
  WeekDay.init(
    {
      serviceId: DataTypes.INTEGER
    },
    {
      sequelize,
      tableName: 'weekdays',
      modelName: 'WeekDay'
    }
  );
  return WeekDay;
};
