let num1 = 9.54578;

let num2 = Math.floor(num1); //Arredonda para baixo 
console.log(num2);

num2 = Math.ceil(num1); //Arredonda para cima
console.log(num2);

num2 = Math.round(num1); //Arredonda para o mais próximo
console.log(num2);

console.log(Math.max(1, 2, 515, -10, -985, 253, 8));
console.log(Math.min(1, 2, 515, -10, -985, 253, 8));

const aleatorio = Math.random() * (10 - 5) + 5;
console.log(aleatorio);
const aleratorioInteiro = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleratorioInteiro);

console.log(Math.pow(2, 10));
console.log(2 ** 10);

console.log(Math.sqrt(9));
console.log(9 ** (1/2));
console.log(9 ** 0.5);
