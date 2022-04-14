function saudacao(name){
    return `Olá ${name}`;
}

const retorno = saudacao('Marcelo');
console.log(retorno);

function soma(x = 2, y = 2) {
    return x + y;
}
console.log(soma(2,5));
console.log(soma(20,13));
console.log(soma());
console.log(soma(10));
console.log(soma(y = 10));

const raiz = function(x){
    return x ** 0.5;
};

console.log(raiz(9));
console.log(raiz(144));

const raiz2 = (n) => {
    return n ** 0.5;
};

const raiz3 = n => n ** 0.5;

console.log(raiz2(9));
console.log(raiz2(144));
console.log(raiz3(9));
console.log(raiz3(144));