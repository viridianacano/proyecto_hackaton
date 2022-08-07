'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class universidades_intereses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  universidades_intereses.init({
    id_universidad: DataTypes.INTEGER,
    id_interes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'universidades_intereses',
  });
  return universidades_intereses;
};