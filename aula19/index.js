/**
 * Primitivos imutáveis: string, number, boolean, undefined
 * null (bigint, symbol) - valor
 */

let nome = 'Marcelo';
nome = 'Benício';
console.log(nome);

let a = "A";
let b = a; //cópia
console.log(a,b);
a = "C";
console.log(a,b);

/**
 * Referência (mutável): array, object, function
 */

let d = [1,2,3];
let e = d; //passado por referência, mesmo valor na memória
let f = [...d]; //fazendo uma cópia dos valores
console.log(d,e,f);
d.push(4);
f.unshift(0);
console.log(d,e,f);
d.pop();
console.log(d,e,f);

const pessoa = {
    nome: 'João',
    sobrenome: 'Matos'
}
const pessoa2 = pessoa;
pessoa2.nome = 'Pedro';
console.log(pessoa.nome);