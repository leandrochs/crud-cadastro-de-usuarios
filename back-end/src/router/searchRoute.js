const express = require('express');

const auth = require('../middleware/auth');
const Controller = require('../modules/search/controller');

const userRoute = express.Router();

userRoute.post('/', auth, Controller.searchByParam);

module.exports = userRoute;
