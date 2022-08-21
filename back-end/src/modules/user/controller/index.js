const Service = require('../service');

async function findAll(req, res) {
  const user = await Service.findAll();

  if (!user) {
    return res.status(400).json({ message: 'Nenhum registro encontrado.' });
  }

  return res.status(200).json(user);
}

async function findById(req, res) {
  const { id } = req.params;
  const user = await Service.findById(id);

  if (!user) {
    return res.status(400).json({ message: 'Id inválido.' });
  }

  return res.status(200).json(user);
}

async function create(req, res) {
  const user = await Service.create(req.body);

  if (!user) {
    return res.status(400).json({ message: 'Cadastro não realizado.' });
  }

  return res.status(201).json(user);
}

module.exports = {
  findAll,
  findById,
  create,
};
