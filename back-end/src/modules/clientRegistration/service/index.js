const Model = require('../model');

async function findAll() {
  try {
    const client = await Model.findAll();
    return client;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

async function findById(userId) {
  try {
    const client = await Model.findById(userId);
    return client;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

async function create(fullName, email) {
  try {
    const client = await Model.create(fullName, email);
    return client;
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
