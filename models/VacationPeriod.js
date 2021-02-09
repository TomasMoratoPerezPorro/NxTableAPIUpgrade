'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VacationPeriod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Service }) {
      this.belongsTo(Service, { foreignKey: 'serviceId' });
    }
  }
  VacationPeriod.init(
    {
      serviceId: DataTypes.INTEGER,
      startingDate: DataTypes.DATE,
      endingDate: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'VacationPeriod'
    }
  );
  return VacationPeriod;
};
