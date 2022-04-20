//reduce

const numeros = [5, 50, 80, 1, 9, 654, 45, 65, 27, 996, 36, 74, 41, 28, 22, 13, 51, 190, 70];

const total = numeros.reduce(function (acc, valor, index, arr) {
    return acc += valor;
}, 0);

//imitação de filter
const total2 = numeros.reduce(function (acc, valor) {
    if (valor % 2 === 0) acc.push(valor);
    return acc;
}, []);
console.log(total2);

//imitação de map
const total3 = numeros.reduce(function (acc, valor) {
    acc.push(valor * 2);
    return acc;
}, []);
console.log(total3);

const pessoas = [
    { nome: 'Marcelo', idade: 35 },
    { nome: 'Benício', idade: 2 },
    { nome: 'Bruna', idade: 38 },
    { nome: 'Juraci', idade: 60 },
    { nome: 'Maria', idade: 56 },
    { nome: 'Antônio', idade: 68 },
];

const maisVelha = pessoas.reduce(function (acc, valor) {
    if (acc.idade > valor.idade) return acc;
    return valor;
});
console.log(maisVelha);