'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class estudiantes_intereses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  estudiantes_intereses.init({
    id_alumno: DataTypes.INTEGER,
    id_interes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'estudiantes_intereses',
  });
  return estudiantes_intereses;
};