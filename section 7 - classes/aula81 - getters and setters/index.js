const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade() {
        return this[_velocidade];
    }

    set velocidade(value) {
        if (typeof value !== 'number') return;
        if (value <= 0 || value >= 100) return;

        this[_velocidade] = value;
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');
for (let i = 0; i < 200; i++) {
    c1.acelerar();
}

console.log(c1);

for (let i = 0; i < 200; i++) {
    c1.freiar();
}
console.log(c1);

c1.velocidade = 50;
console.log(c1);

c1.velocidade = -10;
console.log(c1.velocidade);


class Pessoa{
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    set nomeCompleto(value) {
        let arrValue = value.split(' ');
        this.nome = arrValue.shift();
        this.sobrenome = arrValue.join(' ');
    }
}

const p1 = new Pessoa('Marcelo', 'Pereira');
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Marcelo de Oliveira Pereira';
console.log(p1.nomeCompleto);
