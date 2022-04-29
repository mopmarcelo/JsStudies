class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }
    comer() {
        console.log(`${this.nome} está comendo.`);
    }
    andar() {
        console.log(`${this.nome} está andando.`);
    }
}

const p1 = new Pessoa('Marcelo', 'Pereira');
console.log(p1);