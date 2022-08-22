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

async function update(req, res) {
  const user = await Service.update(req.body);

  if (!user) {
    return res.status(400).json({ message: 'Edição não realizada.' });
  }

  return res.status(200).json(user);
}

async function destroy(req, res) {
  const { id } = req.body;
  console.log(id);
  const user = await Service.destroy(id);

  if (!user) {
    return res.status(400).json({ message: 'Usuário não deletado.' });
  }

  return res.status(200).json({ message: 'Usuário deletado com sucesso.' });
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  destroy,
};
