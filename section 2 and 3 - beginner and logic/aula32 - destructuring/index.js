//Atribuição por desestruturacao
// objetos

const pessoa = {
    nome: 'Marcelo',
    sobrenome: 'Pereira',
    idade: 35,
    endereco: {
        rua: 'Jorge Pedro Bedoglim',
        numero: 55
    }
};

//const { nome = 'Teste', sobrenome, endereco } = pessoa;
//console.log(nome, sobrenome, endereco);

// const {endereco: {rua, numero}, endereco} = pessoa;
// console.log(rua, numero, endereco);

// const { endereco: { rua: r = 12345, numero}} = pessoa;
// console.log(r, numero);

const {nome, sobrenome, ...resto} = pessoa;
console.log(nome, sobrenome);
console.log(resto);