const { sign, verify } = require('jsonwebtoken');
const fs = require('fs');

const jwtConfig = { algorithm: 'HS256', expiresIn: '30d' };

const jwtKey = fs.readFileSync('./jwt.evaluation.key', 'utf8');

const jwtTokenGenerator = (user) =>
  sign({ id: user.dataValues.id }, jwtKey, jwtConfig);

const jwtTokenVerify = (token) => verify(token, jwtKey);

module.exports = {
  jwtTokenGenerator,
  jwtTokenVerify,
};
