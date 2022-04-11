const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc; //peso/(altura*altura)
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
console.log(imc);

anoNascimento = new Date().getFullYear() - idade;
console.log(anoNascimento);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log('tem ' + alturaEmM + ' de altura e seu IMC é de ' + imc.toPrecision(4));
console.log(`${nome} nasceu em ${anoNascimento}.`);