/**
 * Operadores de comparação
 * > maior que 
 * >= maior ou igual a
 * < menor que 
 * <= menor ou igual a
 * == igualdade de valor
 * === igualdade de valor e tipo
 * != diferença de valor
 * !=== diferença de valor e tipo
 */

let comp = 10 > 5;
console.log(comp);

comp = 10 >= 5;
console.log(comp);

comp = 10 < 11;
console.log(comp);

comp = 12 <= 11;
console.log(comp);

const num1 = 10;
const num2 = 11;
const num3 = '10';
comp = num1 < num2;

console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 == num3);
console.log(num1 === num3);

console.log(num1 != num2);
console.log(num1 !== num2);
console.log(num1 != num3);
console.log(num1 !== num3);