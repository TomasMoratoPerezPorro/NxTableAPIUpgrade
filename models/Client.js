'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Restaurant, Reservation }) {
      this.belongsTo(Restaurant, { foreignKey: 'restaurantId' });
      this.hasMany(Reservation, { foreignKey: 'clientId' });
    }
  }
  Client.init(
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
      mobile: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      tableName: 'clients',
      modelName: 'Client'
    }
  );
  return Client;
};
