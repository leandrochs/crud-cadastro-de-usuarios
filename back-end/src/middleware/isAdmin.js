const Service = require('../modules/user/service');

async function isAdmin(req, res, next) {
  const { role } = await Service.findById(req.userId);
  if (role !== 'admin') {
    return res.status(400).json({ message: 'Nível de acesso negado.' });
  }

  next();
}

module.exports = isAdmin;
