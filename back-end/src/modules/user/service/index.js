const Model = require('../model');

async function findAll() {
  try {
    const users = await Model.findAll();
    return users;
  } catch (error) {
    console.log(error.message);
    return error;
  }
}

async function findById(id) {
  try {
    const user = await Model.findById(id);
    return user;
  } catch (error) {
    console.log(error.message);
    return error;
  }
}

async function findByEmail(email) {
  try {
    const user = await Model.findByEmail(email);
    return user;
  } catch (error) {
    console.log(error.message);
    return error;
  }
}

async function findByCpf(cpf) {
  try {
    const user = await Model.findByCpf(cpf);
    return user;
  } catch (error) {
    console.log(error.message);
    return error;
  }
}

async function create(payload) {
  try {
    const user = await Model.create(payload);
    return user;
  } catch (error) {
    console.log(error.message);
    return error;
  }
}

module.exports = {
  findAll,
  findById,
  findByEmail,
  findByCpf,
  create,
};
