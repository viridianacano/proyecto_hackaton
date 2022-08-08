'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('estudiantes_intereses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_alumno: {
        type: Sequelize.INTEGER,
        references: {
          model: "estudiantes",
          key: "id",

        },
        onDeleted:"CASCADE",
        onUpdated:"CASCADE",
      },
      id_interes: {
        type: Sequelize.INTEGER,
        references:{
          model: "intereses",
          key: "id",
        },
        onDeleted:"CASCADE",
        onUpdated:"CASCADE", 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('estudiantes_intereses');
  }
};