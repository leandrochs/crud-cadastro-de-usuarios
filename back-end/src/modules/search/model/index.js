const { Op } = require('sequelize');
const { User } = require('../../../database/models');

async function searchById(id) {
  const user = await User.findByPk(id);

  return user;
}

async function searchByName(search) {
  const user = await User.findAll({
    where: {
      fullName: { [Op.like]: `%${search}%` },
    },
  });

  return user;
}

async function searchByEmail(search) {
  const user = await User.findAll({
    where: {
      email: { [Op.like]: `%${search}%` },
    },
  });

  return user;
}

async function searchByPhone(search) {
  const user = await User.findAll({
    where: {
      phone: { [Op.like]: `%${search}%` },
    },
  });

  return user;
}

async function searchByCpf(search) {
  const user = await User.findAll({
    where: {
      cpf: { [Op.like]: `%${search}%` },
    },
  });

  return user;
}

module.exports = {
  searchByCpf,
  searchByEmail,
  searchById,
  searchByName,
  searchByPhone,
};
