const Model = require('../model');

const findOne = async (email, password) => {
  try {
    const user = await Model.findOne(email, password);
    return user;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

module.exports = {
  findOne,
};
