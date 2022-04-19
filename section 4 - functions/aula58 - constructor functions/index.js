//Função construtora -> objetos
//Contrutora -> new Objeto

function Pessoa(nome, sobrenome) {
    //Propriedades internas
    const ID = 123456;
    const metodoInterno = function() {

    };

    //Propriedades públicas
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.agir = () => {
        console.log(`${this.nome} agiu.`);
    };
}

const p1 = new Pessoa('Marcelo', 'Pereira');
const p2 = new Pessoa('Benício', 'Scarmagnani');

p1.agir();
p2.agir();