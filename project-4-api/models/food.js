'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Food.hasMany(models.Exposure, {foreignKey: "id"});
      Food.belongsToMany(models.GroceryList, {
        through: "GroceryListsFood",
        foreignKey: "foodId",
        otherKey: "listId"
      });
    }
  };
  Food.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Food',
  });
  return Food;
};