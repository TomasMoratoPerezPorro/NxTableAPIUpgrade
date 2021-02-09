'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('OnlineConfigs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      serviceId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'services'
            /* schema: 'nx_table_development' */
          },
          key: 'id'
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
    await queryInterface.dropTable('OnlineConfigs');
  }
};
