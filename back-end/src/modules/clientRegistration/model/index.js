const { Client } = require('../../../database/models');

async function findAll() {
  const users = await Client.findAll();

  return users;
}

async function findById(userId) {
  const user = await Client.findByPk(userId);

  return user;
}

async function create(fullName, email) {
  const user = await Client.create({ fullName, email });
  return user;
}

module.exports = {
  findAll,
  findById,
  create,
  // findByEmail,
  // findByName,
  // create,
  // destroy,
};
