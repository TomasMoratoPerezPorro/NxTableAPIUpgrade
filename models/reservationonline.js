'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReservationOnline extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ReservationOnline.init({
    isAssigned: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ReservationOnline',
  });
  return ReservationOnline;
};