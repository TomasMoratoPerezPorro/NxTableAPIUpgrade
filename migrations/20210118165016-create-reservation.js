'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      clientId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'clients'
            /* schema: 'nx_table_development' */
          },
          key: 'id'
        },
        allowNull: false
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
      shiftId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'shifts'
            /* schema: 'nx_table_development' */
          },
          key: 'id'
        },
        allowNull: false
      },
      restaurantId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'restaurants'
            /* schema: 'nx_table_development' */
          },
          key: 'id'
        },
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      startingTime: {
        type: DataTypes.TIME,
        allowNull: false
      },
      numberOfDinners: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      state: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      comments: {
        type: DataTypes.STRING,
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
    await queryInterface.dropTable('reservations');
  }
};