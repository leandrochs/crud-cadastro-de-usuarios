const express = require('express');

// const { validateClient } = require('../middlewares/validateClient');
const auth = require('../middleware/auth');
const Controller = require('../modules/clientRegistration/controller');

const clientRoute = express.Router();

clientRoute.get('/',auth, Controller.findAll)
clientRoute.get('/:id', Controller.findById)
clientRoute.post('/', Controller.create)

module.exports = clientRoute;

// "email": "email01@email.com",
//   "cpf": "29863462861"
