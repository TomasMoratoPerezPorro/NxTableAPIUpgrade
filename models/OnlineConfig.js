'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OnlineConfig extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Service }) {
      this.belongsTo(Service, { foreignKey: 'serviceId' });
    }
  }
  OnlineConfig.init(
    {
      acceptsOnline: DataTypes.BOOLEAN,
      minDinners: DataTypes.INTEGER,
      maxDinners: DataTypes.INTEGER,
      minAnticipation: DataTypes.BIGINT,
      autoAssignment: DataTypes.BOOLEAN,
      maxReservations: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'OnlineConfig'
    }
  );
  return OnlineConfig;
};
