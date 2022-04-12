const nome = "Marcelo Pereira";
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);
console.log(alunos[0],alunos[1],alunos[2]);

alunos[0] = 'Pedro';
alunos[3] = 'Luiza';
console.log(alunos);

alunos[alunos.length] = 'Fabio';
alunos.push('Julia');
console.log(alunos);

console.log(alunos.pop());
console.log(alunos);

alunos.unshift('Julia');
console.log(alunos);

console.log(alunos.shift());
alunos.push('Júlia');
console.log(alunos);

delete alunos[1];
console.log(alunos);

console.log(alunos.slice(0,3));
console.log(alunos.slice(0, -2));
console.log(alunos.slice(-2));

console.log(typeof alunos);
console.log(alunos instanceof Array);