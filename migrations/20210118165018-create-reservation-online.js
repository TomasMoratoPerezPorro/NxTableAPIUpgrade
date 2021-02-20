'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('reservationOnlines', {
      reservationOnlineId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      reservationId: {
        type: DataTypes.UUID,
        allowNull: false,

        references: {
          model: {
            tableName: 'reservations'
          },
          key: 'reservationId'
        }
      },
      isAssigned: {
        type: DataTypes.BOOLEAN
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
    await queryInterface.dropTable('reservationOnlines');
  }
};
