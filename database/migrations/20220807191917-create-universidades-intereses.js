'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('universidades_intereses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_universidad: {
        type: Sequelize.INTEGER,
        references:{
          model:"universidad",
          key:"id",

        },
        onDeleted:"CASCADE",
        onUpated:"CASCADE",

      },
      id_interes: {
        type: Sequelize.INTEGER,
        references: {
          model: "intereses",
          key: "id",
        },
        onDeleted:"CASCADE",
        onUpated:"CASCADE",

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
    await queryInterface.dropTable('universidades_intereses');
  }
};