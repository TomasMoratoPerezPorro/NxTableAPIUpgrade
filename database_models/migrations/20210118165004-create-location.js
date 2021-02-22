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
        type: DataTypes.STRING(20)
      },
      streetName: {
        type: DataTypes.STRING(30)
      },
      streetNumber: {
        type: DataTypes.STRING(5)
      },
      zipCode: {
        type: DataTypes.STRING(10)
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
