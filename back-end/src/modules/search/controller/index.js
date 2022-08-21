const Service = require('../service');

async function searchByParam(req, res) {
  const { search } = req.body;
  const PHONE_LENGTH = 11;
  const CPF_LENGTH = 11;

  if (!search) {
    return res.status(400).json({ message: 'Campo vazio.' });
  }

  let user = await Service.searchByName(search);

  if (!user.length) {
    user = await Service.searchByEmail(search);
  }

  if (!user.length && search?.length == PHONE_LENGTH) {
    user = await Service.searchByPhone(search);
  }

  if (!user.length && search?.length === CPF_LENGTH) {
    user = await Service.searchByCpf(search);
  }

  if (!user.length) {
    user = await Service.searchById(search);
  }

  if (!user) {
    return res.status(400).json({ message: 'Nenhum resultado.' });
  }

  return res.status(200).json(user);
}

module.exports = {
  searchByParam,
};
