'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullName: {
        type: Sequelize.STRING,
        field: 'full_name',
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.BIGINT,
        allowNull: true,
        defaultValue: 11000000000,
      },
      birthDate: {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: '00/00/0000',
        field: 'birth_date',
      },
      role: {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: 'user',
      },
      status: {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: 'active',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  },
};
