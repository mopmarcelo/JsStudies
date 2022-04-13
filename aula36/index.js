const frutas = [ 'pera', 'maça', 'uva' ];

for(let index in frutas){
    console.log(frutas[index]);
}

const pessoa = {
    nome: 'Marcelo',
    sobrenome: 'Pereira',
    idade: 35
};

for (chave in pessoa){
    console.log(pessoa[chave]);
}