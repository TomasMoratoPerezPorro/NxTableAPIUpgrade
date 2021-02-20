'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('serviceShifts', {
      serviceShiftId: {
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
      shiftNum: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      startingTime: {
        type: DataTypes.TIME,
        allowNull: false
      },
      durationTime: {
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
    await queryInterface.dropTable('serviceShifts');
  }
};
