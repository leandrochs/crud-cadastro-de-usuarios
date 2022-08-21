const { User } = require('../../../database/models');

async function findOne(email, password) {
  const users = await User.findOne({ where: { email, password } });

  return users;
}

async function create(email, password) {
  const user = await User.create({ email, password });
  return user;
}

module.exports = {
  findOne,
  create,
  // destroy,
};
