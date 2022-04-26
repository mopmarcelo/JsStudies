// LITERAL
const pessoa = {
    nome: 'Marcelo',
    sobrenome: 'Pereira',
    idade: 35
};
const chave = 'nome'
console.log(pessoa.nome);
console.log(pessoa[chave]);
console.log(pessoa["sobrenome"]);


const pessoa1 = new Object();
pessoa1.nome = 'Benício';
pessoa1.sobrenome = 'Scarmagnani';
pessoa1.idade = 2;
pessoa1.falarNome = function () {
    return (`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function () {
    return new Date().getFullYear() - this.idade;
};

console.log(pessoa1.nome);
console.log(pessoa1[chave]);

delete pessoa.sobrenome;
delete pessoa1.sobrenome;

console.log(pessoa);
console.log(pessoa1);
console.log(pessoa1.falarNome());
console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1){
    console.log(pessoa1[chave]);
}


// FACTORY - CONSTRUCTOR | FUNCTIONS
function criaPessoa(nome, sobrenome){
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Marcelo', 'Pereira');
p1.sobrenome = 'Oliveira Pereira';
Object.freeze(p1); //bloqueia alterações no objeto
p1.sobrenome = 'Pereira';
console.log(p1.nomeCompleto);


function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => {
        return `${this.nome} ${this.sobrenome}`;
    };
    Object.freeze(this); //bloqueia qualquer alteração no objeto
}

const p2 = new Pessoa('Marcelo', 'Pereira');
console.log(p2.nomeCompleto());