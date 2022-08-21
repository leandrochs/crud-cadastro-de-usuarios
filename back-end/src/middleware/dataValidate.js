const Joi = require('joi');

const loginSchema = Joi.object({
  id: Joi.number()
  .messages({
    'number.number': 'O id deve ser um número.',
  }),

  fullName: Joi.string().required()
    .messages({
      'any.required': 'O campo nome está vazio.',
    }),

  email: Joi.string().email().required()
    .messages({
      'any.required': 'O campo email está vazio.',
    }),

  cpf: Joi.number().min(11111111111).max(99999999999).required()
    .messages({
      'any.required': 'O campo cpf está vazio.',
      'number.min': 'CPF deve ter 11 caracteres.',
      'number.max': 'CPF deve ter 11 caracteres.',
    }),

  phone: Joi.number().min(1111111111).max(99999999999)
    .messages({
      'number.min': 'Telefone deve ter 10 ou 11 caracteres.',
      'number.max': 'Telefone deve ter 10 ou 11 caracteres.',
    }),

  password: Joi.string().min(6).max(10).required()
    .messages({
      'any.required': 'O campo senha está vazio.',
      'string.min': 'A senha requer no mínimo {{#limit }} caracteres.',
      'string.max': 'A senha aceita no máximo {{#limit }} caracteres',
    }),

  birthDate: Joi.string()
    .messages({
      string: 'Informe data de aniverário no formato string',
    }),

  role: Joi.string()
  .messages({
    string: 'Informe role no formato string',
  }),

  status: Joi.string()
  .messages({
    string: 'Informe status no formato string',
  }),
});

const dataValidate = async (req, res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    console.error(error);
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

module.exports = dataValidate;
