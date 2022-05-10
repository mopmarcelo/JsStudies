const nome = 'Marcelo';
const obj = {
    nome
};

const novoObj = {
    ...obj
};

console.log(novoObj);

novoObj.sobrenome = "Pereira";

const objCompleto = {
    ...novoObj
};

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

const p1 = new Pessoa('Marcelo', 'Pereira')