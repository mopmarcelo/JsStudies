const axios = require('axios'); //importações do node não precisam do caminho
const { nome, sobrenome, falaNome } = require('./mod1');
const mod1 = require("./mod1");
const falaNomeFunc = require("./mod1").falaNome();
const { Pessoa } = require('./mod1');

console.log(falaNome());
console.log(mod1.falaNome());
console.log(falaNomeFunc);

const p1 = new Pessoa("Marcelo");
console.log(p1);

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//     .then(res => console.log(res.data))
//     .catch(e => console.log(e));