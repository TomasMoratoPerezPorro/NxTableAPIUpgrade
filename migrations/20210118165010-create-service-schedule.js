'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('serviceSchedules', {
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
