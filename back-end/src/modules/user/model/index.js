const { User } = require('../../../database/models');

async function findAll() {
  const users = await User.findAll();

  return users;
}

async function findById(id) {
  const user = await User.findByPk(id);

  return user;
}

async function create(fullName, email) {
  const user = await User.create({ fullName, email });
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
