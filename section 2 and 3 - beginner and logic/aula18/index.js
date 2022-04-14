const nome1 = 'Marcelo';
const sobrenome1 = 'Pereira';
const idade1 = 35;

const nome2 = 'Bruna';
const sobrenome2 = 'Pelos';
const idade2 = 38;

const pessoa1 = {
    nome: 'Marcelo',
    sobrenome: 'Pereira',
    idade: 35
};

const pessoa2 = {
    nome: 'Bruna',
    sobrenome: 'Peloso',
    idade: 38
};

console.log(pessoa1.nome);
console.log(pessoa2.nome);

function criarPessoa(nome, sobrenome, idade){
    return { 
        nome,
        sobrenome,
        idade,
        fala(){
            console.log(`A minha, ${this.nome}, idade atual é ${this.idade}.`);
        },
        incrementaIdade(){
            this.idade++;
        }
    };
}

const pessoa3 = criarPessoa('Benício', 'Scarmagnani', 2);
const pessoa4 = criarPessoa('Juraci', 'Peloso', 62);
console.log(pessoa3.nome);
pessoa4.fala();
pessoa4.incrementaIdade();
pessoa4.fala();