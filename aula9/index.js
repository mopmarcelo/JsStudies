var nome = 'Luiz';
var nome = 'João';

let outroNome = 'Pedro';
//let outroNome = 'Thiago'; //error
outroNome = "Thiago";

console.log(nome);
console.log(outroNome);

//string
const nome1 = "Luiz";
const nome2 = "Luiz";
const nome3 = `Luiz`;

//number
const num1 = 10;
const num2 = 10.50

//undefined - não aponta pra lugar nenhum na memória
let nomeAluno;

//null - não aponta pra lugar nenhum na memória - zerar uma variável
let sobrenomeAluno = null;

//booleano
const boolean = true;
const boolean1 = false;

console.log(typeof sobrenomeAluno, boolean);

//array
const a = [1,2];
const b = a;
console.log(a,b);

b.push(3);
console.log(a,b);

let ab = 2;
let ab1 = ab;
console.log(ab, ab1);

ab = 3;
console.log(ab,ab1);