'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('serviceOnlineConfigs', {
      serviceOnlineId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      serviceId: {
        type: DataTypes.UUID,
        references: {
          model: {
            tableName: 'services'
          },
          key: 'serviceId'
        },
        allowNull: false
      },
      acceptsOnline: {
        type: DataTypes.BOOLEAN
      },
      minDinners: {
        type: DataTypes.INTEGER
      },
      maxDinners: {
        type: DataTypes.INTEGER
      },
      minAnticipation: {
        type: DataTypes.BIGINT
      },
      autoAssignment: {
        type: DataTypes.BOOLEAN
      },
      maxReservations: {
        type: DataTypes.INTEGER
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
    await queryInterface.dropTable('serviceOnlineConfigs');
  }
};
