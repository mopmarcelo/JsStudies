const numeros = [5, 50, 80, 1, 9, 654, 45, 65, 27, 996, 36, 74, 41, 28, 22, 13, 51, 190, 70];

for (let valor of numeros){
    console.log(valor);
}

numeros.forEach((valor, indice, arr) => {
    console.log(valor, indice);
});

let total = 0;
numeros.forEach(valor => total += valor );
console.log(total);