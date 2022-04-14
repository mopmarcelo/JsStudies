function retornaFuncao(nome) {
    //const nome = 'Marcelo';
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao('Marcelo');
const funcao2 = retornaFuncao('Benício');

console.log(funcao());
console.log(funcao2());

console.dir(funcao);
console.dir(funcao2);