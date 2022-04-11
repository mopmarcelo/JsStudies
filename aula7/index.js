const nome = "João";

console.log(nome, "nasceu em 1984.");
console.log(`Em 2000 ${nome} conheceu Maria.`);
console.log(nome + " casou-se com Maria em 2012.");
console.log(`Maria teve 1 filho com ${nome} em 2015.`);
//nome = "Luiz"; error
console.log(`O filho de ${nome} se chama Eduardo.`);


const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
let resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultado);
console.log(resultadoDuplicado);

console.log(typeof(resultado));