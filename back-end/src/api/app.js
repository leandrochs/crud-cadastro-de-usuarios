const express = require('express');
const cors = require('cors');
const middlewareErro = require('../middleware/erro');

const Route = require('../router');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/login', Route.login);
app.use('/user', Route.user);
app.use('/search', Route.search);
app.use(middlewareErro);

module.exports = app;
