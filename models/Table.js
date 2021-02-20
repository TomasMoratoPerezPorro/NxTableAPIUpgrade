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
      tableId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      tableNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      maxCapacity: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: 'tables',
      modelName: 'Table'
    }
  );
  return Table;
};
