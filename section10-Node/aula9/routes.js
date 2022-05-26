const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');

//rotas da home
route.get('/', homeController.home);
route.post('/', homeController.trataPost);

//rotas de contato
route.get('/contato', contatoController.home);

module.exports = route;