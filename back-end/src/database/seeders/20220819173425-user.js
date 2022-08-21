// 'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Users',
      [
        {
          full_name: 'Admin',
          email: 'admin@email.com',
          cpf: 29829829826,
          password: '123456', // senha: 123456
          phone: 10000000000,
          birth_date: '02/03/1990',
          role: 'admin',
          status: 'active',
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          full_name: 'João Pereira',
          email: 'joao@email.com',
          cpf: 29829829826,
          password: 'teste123', // senha: teste123
          phone: 11956391206,
          birth_date: '02/03/1990',
          role: 'user',
          status: 'active',
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          full_name: 'Joana Antunes',
          email: 'joana@email.com',
          cpf: 49829829845,
          password: 'teste123', // senha: teste123
          phone: 11856391255,
          birth_date: '02/03/1990',
          role: 'user',
          status: 'active',
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          full_name: 'Seu Inativo',
          email: 'inativo@email.com',
          cpf: 99999999999,
          password: 'teste123', // senha: teste123
          phone: 99999999999,
          birth_date: '02/03/1990',
          role: 'user',
          status: 'inactive',
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {},
    ),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
