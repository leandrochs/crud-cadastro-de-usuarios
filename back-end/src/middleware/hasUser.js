const Service = require('../modules/user/service');

async function hasUser(req, res, next) {
  const { email, cpf } = req.body;
  
  const { role } = await Service.findById(req.userId);
  if (role !== 'admin') {
    return res.status(400).json({ message: 'Nível de acesso negado.' });
  }
  
  const hasEmail = await Service.findByEmail(email);
  if (hasEmail) {
    return res.status(400).json({ message: 'Email já cadastrado.' });
  }

  const hascpf = await Service.findByCpf(cpf);
  if (hascpf) {
    return res.status(400).json({ message: 'CPF já cadastrado.' });
  }

  next();
}

module.exports = hasUser;
