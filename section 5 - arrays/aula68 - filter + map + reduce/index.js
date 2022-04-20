//Retorne a soma do dobro de todos os pares

const numeros = [5, 50, 80, 1, 9, 654, 45, 65, 27, 996, 36, 74, 41, 28, 22, 13, 51, 190, 70];

//filter pares
const pares = numeros.filter(x => x % 2 === 0);

//filter pares e retorna o dobro
const pares1 = numeros.filter(x => x % 2 === 0).map(y => y * 2);

//filtra pares, retorna o dobro e soma
const pares2 = numeros.filter(x => x % 2 === 0).map(y => y * 2).reduce((acc, valor) => acc + valor);

console.log(pares);
console.log(pares1);
console.log(pares2);