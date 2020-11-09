'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exposure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Exposure.init({
    userId: DataTypes.INTEGER,
    foodId: DataTypes.INTEGER,
    childId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    reaction: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Exposure',
  });
  return Exposure;
};