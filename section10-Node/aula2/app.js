//const multiplicacao = require('./mod1');
//console.log(multiplicacao(2,5));

// const numero = require('./mod1');
// console.log(numero);

const Cachorro = require('./b/c/d/mod1');
const cachorro = new Cachorro("Fúria");
cachorro.latir();


const Cao = require('./z/mod');
const cao = new Cao("Pluto");
cao.latir();

//variáveis internas do module
console.log(__filename);
console.log(__dirname);

const path = require('path');
console.log(path.resolve(__dirname, '..','..','arquivos', 'imagens'));
