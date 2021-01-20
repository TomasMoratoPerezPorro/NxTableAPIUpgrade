'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('tableReservations', {
      tableId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      reservationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
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
    await queryInterface.dropTable('tableReservations');
  }
};
