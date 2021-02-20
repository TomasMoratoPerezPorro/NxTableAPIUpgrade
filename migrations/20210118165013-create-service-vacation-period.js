'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('serviceVacationPeriods', {
      serviceVacationPeriodId: {
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
    await queryInterface.dropTable('serviceVacationPeriods');
  }
};
