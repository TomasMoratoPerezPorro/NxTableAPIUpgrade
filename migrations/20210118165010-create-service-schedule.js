'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('serviceSchedules', {
      serviceScheduleId: {
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
      openingTime: {
        type: DataTypes.TIME,
        allowNull: false
      },
      lastAdmisionTime: {
        type: DataTypes.TIME,
        allowNull: false
      },
      weekDay: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      isVacation: {
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
    await queryInterface.dropTable('serviceSchedules');
  }
};
