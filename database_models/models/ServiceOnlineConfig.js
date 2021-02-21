'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceOnlineConfig extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Service }) {
      this.belongsTo(Service, { foreignKey: 'serviceId' });
    }
  }
  ServiceOnlineConfig.init(
    {
      serviceOnlineId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      acceptsOnline: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      minDinners: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      maxDinners: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      minAnticipation: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      autoAssignment: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      maxReservations: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: 'serviceOnlineConfigs',
      modelName: 'ServiceOnlineConfig'
    }
  );
  return ServiceOnlineConfig;
};
