const { Op } = require('sequelize');
const { User } = require('../../../database/models');

async function findAll() {
  const users = await User.findAll();

  return users;
}

async function findById(id) {
  const user = await User.findByPk(id);

  return user;
}

async function findByEmail(email) {
  const user = await User.findOne({ where: { email } });

  return user;
}

async function create(payload) {
  const { fullName, email, cpf, password, phone, birthDate, role, status } =
    payload;
  const user = await User.create({
    fullName,
    email,
    cpf,
    password,
    phone,
    birthDate,
    role,
    status,
  });
  return user;
}

module.exports = {
  findAll,
  findById,
  findByEmail,
  create,
  // destroy,
};
