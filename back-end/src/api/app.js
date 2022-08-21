const express = require('express');
const cors = require('cors');
const middlewareErro = require('../middleware/erro');

const Route = require('../router');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/login', Route.login);
app.use('/client', Route.client);
app.use(middlewareErro);

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

module.exports = app;
