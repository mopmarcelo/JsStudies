//Atribuição por desestruturacao
// ... rest, ... spread
const numeros = [ 123, 52, 86, 44, 58, 63, 77, 82, 96 ];

const primeiroNumero = numeros[0];

const [primeiro, segundo, terceiro, quarto, quinto, ...resto ] = numeros;

console.log(primeiro, segundo, terceiro, quarto, quinto);
console.log(resto);

const [um, , tres, , cinco] = numeros;
console.log(um, tres, cinco);

const arrNum = [ [1,2,3], [4,5,6], [7,8,9] ];
const seis = arrNum[1][2];
console.log(seis);
const [,[,,six]] = arrNum;
console.log(six);
const [arr1, arr2, arr3] = arrNum;
console.log(arr3);