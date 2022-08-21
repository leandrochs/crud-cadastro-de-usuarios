const Service = require('../service');

async function findAll(req, res, next) {
  const client = await Service.findAll();

  if (!client) {
    return res.status(400).json({ message: 'Nenhum registro encontrado.' });
  }

  return res.status(200).json(client);
};

async function findById(req, res, next) {
  const { userId } = req.params;
  const client = await Service.findById(userId);

  if (!client) {
    return res
      .status(400)
      .json({ message: 'Nenhum registro encontrado com este id.' });
  }

  return res.status(200).json(client);
};

async function create(req, res, next) {
  const { fullName, email } = req.body;
  const client = await Service.create(fullName, email);

  if (!client) {
    return res
      .status(400)
      .json({ message: 'Cadastro não realizado.' });
  }

  return res.status(201).json(client);
};

module.exports = {
  findAll,
  findById,
  create,
};
