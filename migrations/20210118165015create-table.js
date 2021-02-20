'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('tables', {
      tableId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      restaurantId: {
        type: DataTypes.UUID,
        references: {
          model: {
            tableName: 'restaurants'
          },
          key: 'restaurantId'
        },
        allowNull: false
      },
      tableNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      maxCapacity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('tables');
  }
};
