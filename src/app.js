const express = require('express');
const app = express();
const router = express.Router();

// Aqui importamos as rotas da nossa API
const index = require('./routes/index');
const animalRoute = require('./routes/animalRoute');

app.use('/', index);
app.use('/animais', animalRoute);

module.exports = app;