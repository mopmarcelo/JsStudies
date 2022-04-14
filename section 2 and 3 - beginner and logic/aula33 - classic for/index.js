const numero = 5;

for (let i = 1; i <= numero; i++){
    console.log(`Linha ${i}`);
}

// for (let i = 500; i>= 400; i--){
//     console.log(`Linha ${i}`);
// }

for (let i = 1; i <= 10; i++){
    const tipo = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, tipo);
}

const frutas = [ 'uva', 'maça', 'pera', 'melão' ];
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}
