'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('locations', {
      locationId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      cityId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: 'cities'
          },
          key: 'cityId'
        }
      },
      streetType: {
        type: DataTypes.STRING
      },
      streetName: {
        type: DataTypes.STRING
      },
      streetNumber: {
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
    await queryInterface.dropTable('locations');
  }
};
