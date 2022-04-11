let varA = 'A';
let varB = 'B';
let varC = 'C';
console.log(varA, varB, varC);

let aux = varA;
varA = varB;
varB = varC;
varC = aux;
console.log(varA, varB, varC);

[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);