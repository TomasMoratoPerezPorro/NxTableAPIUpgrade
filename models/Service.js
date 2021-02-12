'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Restaurant,
      Reservation,
      ServiceShift,
      ServiceSchedule,
      ServiceOnlineConfig,
      ServiceVacationPeriod
    }) {
      this.belongsTo(Restaurant, { foreignKey: 'restaurantId' });
      this.hasMany(ServiceOnlineConfig, { foreignKey: 'serviceId' });
      this.hasMany(ServiceVacationPeriod, { foreignKey: 'serviceId' });
      this.hasMany(Reservation, { foreignKey: 'serviceId' });
      this.hasMany(ServiceShift, { foreignKey: 'serviceId' });
      this.hasMany(ServiceSchedule, { foreignKey: 'serviceId' });
    }
  }
  Service.init(
    {
      /* restaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }, */
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      comments: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: 'services',
      modelName: 'Service'
    }
  );
  return Service;
};
