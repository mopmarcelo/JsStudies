let nomes = ['Marcelo', 'Benício', 'Bruna', 'Juraci', 'Maria'];

let removidos = nomes.splice(3,2);
console.log(nomes, removidos);

nomes = nomes.concat(removidos);
console.log(nomes); 

//removidos = nomes.splice(2, Number.MAX_VALUE); // remove todos a partir do índece 2
//removidos = nomes.splice(-2, 2);
nomes.splice(3,0,'Antônio');//não remove ninguém e adiciona Antônio no índice 3
console.log(nomes);