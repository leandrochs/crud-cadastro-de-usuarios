const Model = require('../model');

async function searchById(id) {
  try {
    const user = await Model.searchById(id);
    return user;
  } catch (error) {
    console.log(error.message);
    return error;
  }
}

async function searchByName(search) {
  try {
    const user = await Model.searchByName(search);
    return user;
  } catch (error) {
    console.log(error.message);
    return error;
  }
}

async function searchByEmail(search) {
  try {
    const user = await Model.searchByEmail(search);
    return user;
  } catch (error) {
    console.log(error.message);
    return error;
  }
}

async function searchByPhone(search) {
  try {
    const user = await Model.searchByPhone(search);
    return user;
  } catch (error) {
    console.log(error.message);
    return error;
  }
}

async function searchByCpf(search) {
  try {
    const user = await Model.searchByCpf(search);
    return user;
  } catch (error) {
    console.log(error.message);
    return error;
  }
}

module.exports = {
  searchById,
  searchByName,
  searchByEmail,
  searchByPhone,
  searchByCpf,
};
