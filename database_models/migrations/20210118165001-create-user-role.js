'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('userRoles', {
      userRoleId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      roleName: {
        type: DataTypes.STRING(20)
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('userRoles');
  }
};
