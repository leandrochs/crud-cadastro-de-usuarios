const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required()
    .messages({
      'any.required': 'O campo email está vazio.',
      'string.email': 'Email inválido',
  }),
  password: Joi.string().min(6).max(10).required()
    .messages({
      'any.required': 'O campo senha está vazio.',
      'string.min': 'A senha requer no mínimo {{#limit }} caracteres.',
      'string.max': 'A senha aceita no máximo {{#limit }} caracteres',
    }),
});

const validateLogin = async (req, res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    console.error(error);
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

module.exports = validateLogin;
