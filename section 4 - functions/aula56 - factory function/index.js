//factory function
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, sobrenome,
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        //getter -> não é invocado como função
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        //seter = função de atribuição 
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        altura,
        peso
    };
}

const p1 = criaPessoa('Marcelo', 'Pereira', 1.7, 80);
console.log(p1);
console.log(p1.fala('falando sobre JS'));
console.log(p1.imc);
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Marcelo de Oliveira Pereira';
console.log(p1.nomeCompleto);
