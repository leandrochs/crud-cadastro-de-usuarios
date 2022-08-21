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

async function findByName(search) {
  const user = await User.findAll({
    where: {
      fullName: { [Op.like]: `%${search}%` },
    },
  });

  return user;
}

async function findByEmail(search) {
  const user = await User.findAll({
    where: {
      email: { [Op.like]: `%${search}%` },
    },
  });

  return user;
}

async function findByPhone(search) {
  const user = await User.findAll({
    where: {
      phone: { [Op.like]: `%${search}%` },
    },
  });

  return user;
}

async function findByCpf(search) {
  const user = await User.findAll({
    where: {
      cpf: { [Op.like]: `%${search}%` },
    },
  });

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
  findByName,
  findByEmail,
  findByPhone,
  findByCpf,
  // create,
  // destroy,
};
