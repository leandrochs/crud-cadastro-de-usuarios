const express = require('express');

const auth = require('../middleware/auth');
const hasUser = require('../middleware/hasUser');
const isAdmin = require('../middleware/isAdmin');
const dataValidate = require('../middleware/dataValidate');
const Controller = require('../modules/user/controller');

const userRoute = express.Router();

userRoute.get('/', auth, Controller.findAll);
userRoute.get('/:id', auth, Controller.findById);
userRoute.post('/', auth, isAdmin, hasUser, dataValidate, Controller.create);
userRoute.put('/', auth, isAdmin, dataValidate, Controller.update);

module.exports = userRoute;
