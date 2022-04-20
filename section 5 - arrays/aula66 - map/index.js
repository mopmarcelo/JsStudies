const numeros = [5, 50, 80, 1, 9, 654, 45, 65, 27, 996, 36, 74, 41, 28, 22, 13, 51, 190, 70];

//dobre os números
const dobro = numeros.map(num => num * 2);
console.log(dobro);


const pessoa = [
    {nome: 'Marcelo', idade: 62},
    {nome: 'Benício', idade: 23},
    {nome: 'Bruna', idade: 55},
    {nome: 'Juraci', idade: 19},
    {nome: 'Maria', idade: 32},
    {nome: 'Antônio', idade: 47},
];

const nomes = pessoa.map(x => x.nome);
console.log(nomes);

const objIdades = pessoa.map(x => ({idade: x.idade}));
console.log(objIdades);

const pessoaId = pessoa.map(x => {
    const newObj = { ...x};
    newObj.id = Math.floor(Math.random() * (10 - 1) + 1);
    return newObj;
});

console.log(pessoaId);