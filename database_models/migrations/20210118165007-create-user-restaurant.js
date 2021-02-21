'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('userRestaurants', {
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: {
            tableName: 'users'
            /* schema: 'nx_table_development' */
          },
          key: 'userId'
        }
      },
      restaurantId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: {
            tableName: 'restaurants'
            /* schema: 'nx_table_development' */
          },
          key: 'restaurantId'
        }
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
    await queryInterface.dropTable('userRestaurants');
  }
};
