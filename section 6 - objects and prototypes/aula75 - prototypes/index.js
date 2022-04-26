//new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__ : Object.prototype
};

const objB = {
    chaveB: 'B'
    // __proto__ : objA.prototype
};

const objC = new Object();
objC.chaveC = 'C';


Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 50);
p1.desconto(50);
console.log(p1);
p1.aumento(30);
console.log(p1);

const p2 = {
    nome: 'Caneca',
    preco: 15
};

//Setar o prototype no objeto literal
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);

const p3 = Object.create(Produto.prototype, {
    nome: {
        writable: true, configurable: true, value: 'Caneta', enumerable: true
    },
    preco: {
        writable: true, configurable: true, value: 5.5, enumerable: true
    }
});
p3.aumento(15);
console.log(p3);
