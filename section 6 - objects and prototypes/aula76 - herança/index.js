function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (valor) {
    this.preco -= valor;
}

Produto.prototype.aumento = function (valor) {
    this.preco += valor;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const produto = new Produto('Caneca', 5);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
camiseta.aumento(50);
console.log(camiseta);

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, configurable: false,
        get: function () { return estoque; },
        set: function (valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Caneca Grande', 13, 'Porcelana', 5);
console.log(caneca);