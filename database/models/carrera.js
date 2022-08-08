'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carrera extends Model {
    static associate(models) {
      carrera.belongsTo(models.universidad);
    }
  }
  carrera.init({
    nombre: DataTypes.STRING,
    grado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'carrera',
  });
  return carrera;
};