'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'admin@email.com',
          password: '123456', // senha: 123456
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          email: 'teste@email.com',
          password: 'teste123', // senha: teste123
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {},
    ),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
