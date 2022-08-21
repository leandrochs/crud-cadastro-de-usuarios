const { jwtTokenVerify } = require('../utils/jwtTokenGenerator');

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    jwtTokenVerify(token);
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
  next();
};

module.exports = auth;
