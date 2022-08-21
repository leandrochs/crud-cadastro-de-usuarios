'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Clients',
      [
        {
          full_name: 'João Pereira',
          email: 'joao@email.com',
          cpf: 29829829826,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          full_name: 'Joana Antunes',
          email: 'joana2@email.com',
          cpf: 39829829822,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {},
    ),

  down: async (queryInterface) => queryInterface.bulkDelete('Clients', null, {}),
};
