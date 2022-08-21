const Model = require('../model');

async function findAll() {
  try {
    const users = await Model.findAll();
    return users;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

async function findById(id) {
  try {
    const user = await Model.findById(id);
    return user;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

async function create(fullName, email) {
  try {
    const user = await Model.create(fullName, email);
    return user;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

module.exports = {
  findAll,
  findById,
  create,
};
