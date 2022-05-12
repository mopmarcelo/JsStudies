import { idade, nomePessoa, Pessoa, sobrenome, soma as fSoma } from './modulo1';
import * as MeuModulo from './modulo1';
//import funcaoMarota from './modulo1'; //importando sem as {} pega apenas o default
import funcaoMarota, { idade as idade2, nome as nome2 } from './modulo1';

// 1
// 2
// 3
console.log(nomePessoa, sobrenome, idade);

console.log(fSoma(5,4));

const p1 = new Pessoa('Benício', 'Pereira');
console.log(p1);

console.log(MeuModulo);
console.log(MeuModulo.nome, MeuModulo.sobrenome);


console.log(funcaoMarota(4,6));