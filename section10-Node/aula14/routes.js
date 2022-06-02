const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// function meuMiddleware(req, res, next) {
//     req.session = { nome: 'Marcelo', sobrenome: 'Pereira' };
//     console.log();
//     console.log("Passei no middleware.");
//     console.log();
//     next();
// }
//route.get('/', meuMiddleware, homeController.home, function (req, res, next) { console.log(); console.log("Outra coisa."); });

//rotas da home
route.get('/', homeController.home);
route.post('/', homeController.trataPost);

//rotas de contato
route.get('/contato', contatoController.home);

module.exports = route;