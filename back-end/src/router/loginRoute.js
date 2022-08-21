const express = require('express');

const validate = require('../middleware/validate');
const Controller = require('../modules/login/controller');

const loginRouter = express.Router();

loginRouter.post('/', validate, Controller.findOne);

module.exports = loginRouter;
