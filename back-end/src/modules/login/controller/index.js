const { sign } = require('jsonwebtoken');
const Service = require('../service');
const jwtConfig = require('../../../config/JwtConfig');

const findOne = async (req, res) => {
  const { email, password } = req.body;

  const user = await Service.findOne(email, password);

  if (!user || password !== user.password) {
    return res.status(400).json({ message: 'Senha ou email inválidos.' });
  }

  const token = sign(
    { id: user.dataValues.id },
    jwtConfig.secret,
    jwtConfig.configs,
  );

  return res.status(200).json({ token });
};

module.exports = {
  findOne,
};
