'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('reservations', {
      reservationId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      clientId: {
        type: DataTypes.UUID,
        references: {
          model: {
            tableName: 'clients'
          },
          key: 'clientId'
        },
        allowNull: false
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
      restaurantId: {
        type: DataTypes.UUID,
        references: {
          model: {
            tableName: 'restaurants'
          },
          key: 'restaurantId'
        },
        allowNull: false
      },
      reservationStateId: {
        type: DataTypes.UUID,
        references: {
          model: {
            tableName: 'reservationStates'
          },
          key: 'reservationStateId'
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
