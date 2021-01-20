'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Restaurant, Reservation }) {
      // define association here
      this.belongsTo(Restaurant, { foreignKey: 'restaurantId' });
      this.belongsToMany(Reservation, { through: 'TableReservation' });
    }
  }
  Table.init(
    {
      maxCapacity: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: 'table',
      modelName: 'Table'
    }
  );
  return Table;
};
