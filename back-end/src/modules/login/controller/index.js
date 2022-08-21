const Service = require('../service');
const { jwtTokenGenerator } = require('../../../utils/jwtTokenGenerator');

const findOne = async (req, res) => {
  const { email, password } = req.body;

  const user = await Service.findOne(email, password);

  if (!user || password !== user.password) {
    return res.status(400).json({ message: 'Senha ou email inválidos.' });
  }

  const token = jwtTokenGenerator(user);

  return res.status(200).json({ token });
};

module.exports = {
  findOne,
};
