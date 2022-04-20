//filter -> sempre retorna um array igual ou menor ao original

const numeros = [5, 50, 80, 1, 9, 654, 45, 65, 27, 996, 36, 74, 41, 28, 22, 13, 51, 190, 70];
const maior30 = numeros.filter(callBackFilter);

function callBackFilter(valor) {
    return valor > 30;
}

console.log(maior30);

const arr = [1,2,3,4,5,6,7,8,9,10];
const arrPar = arr.filter(x => x % 2 == 0);

console.log(arrPar);


const pessoa = [
    {nome: 'Marcelo', idade: 62},
    {nome: 'Benício', idade: 23},
    {nome: 'Bruna', idade: 55},
    {nome: 'Juraci', idade: 19},
    {nome: 'Maria', idade: 32},
    {nome: 'Antônio', idade: 47},
];

const nomes7Letras = pessoa.filter(x => x.nome.length >= 7);
const idadeMais35 = pessoa.filter(x => x.idade >= 35);
const nomesFimA = pessoa.filter(x => x.nome.endsWith('a'));
console.log(nomes7Letras);
console.log(idadeMais35);
console.log(nomesFimA);