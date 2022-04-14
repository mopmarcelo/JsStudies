const nomes = ['Marcelo', 'Oliveira', 'Pereira' ];

for (let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

console.log('');

for(let index in nomes){
    console.log(nomes[index]);
}

console.log('');

for(let valor of nomes){
    console.log(valor);
}

console.log('');

nomes.forEach(nome => {
    console.log(nome);
});

const pessoa = {
    nome: 'Marcelo',
    sobrenome: 'Pereira'
};

//only
for (let chave in pessoa){
    console.log(pessoa[chave]);
}
