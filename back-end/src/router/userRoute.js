const express = require('express');

const auth = require('../middleware/auth');
const hasUser = require('../middleware/hasUser');
const Controller = require('../modules/user/controller');

const userRoute = express.Router();

userRoute.get('/', auth, Controller.findAll);
userRoute.get('/:id', auth, Controller.findById);
userRoute.post('/', auth, hasUser, Controller.create);

module.exports = userRoute;
