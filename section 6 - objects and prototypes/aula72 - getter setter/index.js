function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    //this.estoque = estoque;
    Object.defineProperty(this, 'estoque', { 
        enumerable: true, // mostra a chave forIn
        configurable: true, // pode reconfigurar a chave 
        // não será usado pois terá get e set
        //value: estoque, // valor
        //writable: true, // pode alterar o valor?
        get: function() {
            return estoque;
        },
        set: function(value) {
            if(typeof valor !== 'number') return;
            estoque = value;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 'teste';
p1.estoque = 5;
