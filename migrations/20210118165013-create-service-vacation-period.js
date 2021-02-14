'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('ServiceVacationPeriods', {
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
      startingDate: {
        type: DataTypes.DATE
      },
      endingDate: {
        type: DataTypes.DATE
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
    await queryInterface.dropTable('ServiceVacationPeriods');
  }
};
