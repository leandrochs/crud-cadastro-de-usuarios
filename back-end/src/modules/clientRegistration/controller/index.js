const Service = require('../service');

async function findAll(req, res) {
  const client = await Service.findAll();

  if (!client) {
    return res.status(400).json({ message: 'Nenhum registro encontrado.' });
  }

  return res.status(200).json(client);
}

async function findById(req, res) {
  const { id } = req.params;
  const client = await Service.findById(id);

  if (!client) {
    return res.status(400).json({ message: 'Id inválido.' });
  }

  return res.status(200).json(client);
}

async function findByParam(req, res) {

  req.params
  const { id } = req.params;
  const client = await Service.findByParam(id);

  if (!client) {
    return res.status(400).json({ message: 'Id inválido.' });
  }

  return res.status(200).json(client);
}


async function create(req, res, next) {
  const { fullName, email } = req.body;
  const client = await Service.create(fullName, email);

  if (!client) {
    return res.status(400).json({ message: 'Cadastro não realizado.' });
  }

  return res.status(201).json(client);
}

module.exports = {
  findAll,
  findById,
  create,
};
