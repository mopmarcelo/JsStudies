function funcao(a, b, c) {
    // console.log(arguments);

    let total = 0;

    for (let args of arguments) {
        total += args;
    }
    console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


function soma(a, b = 5, c = 3) {
    //console.log(a,b,c);
    console.log(a + b + c);
}

soma(2);
soma(2, 1);
soma(2, undefined, 20);

//function com desestruturação
function objeto({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

objeto({ nome: "Marcelo", sobrenome: 'Pereira', idade: 35 });

function funArray([vl1, vl2, vl3]) {
    console.log(vl1, vl2, vl3);
}

funArray(['Marcelo', 'Pereira', 35]);

//rest operator
const conta = function (operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros);

    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }

    console.log(acumulador);
}

//não possui o 'arguments'
const conta2 = (operador, acumulador, ...numeros) => {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}

const conta3 = (...args) => {
    console.log(args);
}

conta('+', 1, 20, 30, 40, 50);
conta2('+', 1, 20, 30, 40, 50);
conta3('+', 1, 20, 30, 40, 50);
