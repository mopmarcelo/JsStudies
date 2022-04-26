function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    //this.estoque = estoque;
    Object.defineProperty(this, 'estoque', { 
        enumerable: true, // mostra a chave forIn
        value: estoque, // valor
        writable: false, // pode alterar o valor?
        configurable: true // pode reconfigurar a chave 
    });

    //reconfigurando a chave acima
    Object.defineProperty(this, 'estoque', { 
        enumerable: true, // mostra a chave forIn ou Object.key
        value: estoque, // valor
        writable: true, // pode alterar o valor?
        configurable: false // pode reconfigurar a chave 
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500;
delete p1.estoque;//configurable false não permite a exclusão
console.log(p1);

console.log(Object.keys(p1));
for (let chave in p1){
    console.log(chave);
}


function Produto2(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', { 
        enumerable: true, // mostra a chave forIn
        value: estoque, // valor
        writable: true, // pode alterar o valor?
        configurable: true // pode reconfigurar a chave 
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave forIn
            value: nome, // valor
            writable: true, // pode alterar o valor?
            configurable: true // pode reconfigurar a chave 
        },
        preco: {
            enumerable: true, // mostra a chave forIn
            value: preco, // valor
            writable: true, // pode alterar o valor?
            configurable: true // pode reconfigurar a chave 
        }
    });
}

const p2 = new Produto2('Calça', 30, 5);
p2.estoque = 500;
delete p2.estoque;//configurable true permite a exclusão
console.log(p2);

console.log(Object.keys(p2));
for (let chave in p2){
    console.log(chave);
}

