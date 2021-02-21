'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceVacationPeriod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Service }) {
      this.belongsTo(Service, { foreignKey: 'serviceId' });
    }
  }
  ServiceVacationPeriod.init(
    {
      serviceVacationPeriodId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      serviceId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      startingDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      endingDate: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: 'ServiceVacationPeriods',
      modelName: 'ServiceVacationPeriod'
    }
  );
  return ServiceVacationPeriod;
};
