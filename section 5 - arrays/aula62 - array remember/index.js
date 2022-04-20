//array valor por referência

const nomes = ['Marcelo', 'Benício', 'Bruna'];
const novo = nomes;
novo.pop();
nomes[2] = 'Ben';
delete nomes[1];
nomes.push('Bruna');

console.log(nomes);
console.log(novo);

const nomes2 = new Array('Marcelo', 'Benício', 'Bruna');
//cópia de valores e não da referência
const novo2 = [...nomes2];

nomes.push('Juraci');
console.log(nomes.pop());

nomes.unshift('Maria');
console.log(nomes.shift());

console.log(nomes);

//slice
//const novoArr = nomes.slice(1, 3); //novo array dos indíces 1 ao 2
//const novoArr = nomes.slice(0, -1); //novo array removendo o último
//const novoArr = nomes.slice(0, -2); //novo array removendo os dois últimos
const novoArr = nomes.slice(1, -1); //novo array removendo o primeiro e o último
console.log(novoArr);

const nome = 'Marcelo de Oliveira Pereira';
const arrNome = nome.split(' ');
console.log(nomes);
const nomeDeNovo = arrNome.join(' ');
console.log(nomeDeNovo);

const arrString = [...nome];