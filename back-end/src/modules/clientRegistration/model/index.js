const { Client } = require('../../../database/models');

async function findAll() {
  const users = await Client.findAll();

  return users;
}

async function findById(id) {
  const user = await Client.findByPk(id);

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
