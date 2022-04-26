//Contructor -> molde class
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`; //gera problema de performance pois consome memória do cliente
}

Pessoa.prototype.nomeCompleto = function () { return `${this.nome} ${this.sobrenome}` };

//instance
const p1 = new Pessoa("Marcelo", "Pereira");
const p2 = new Pessoa('Bruna', 'Scarmagnani');

console.dir(p1);
console.dir(p2);
console.log(p1.nomeCompleto());
console.log(p2.nomeCompleto());

const data = new Date();
console.dir(data);