const produto = { nome: "Camiseta", preco: 1.8 };
const outroProduto = produto;

outroProduto.nome = 'Camisa';
outroProduto.preco = 2.5;
console.log(outroProduto);
console.log(produto);

novoProduto = { ...produto, material: 'Algodão'};
novoProduto.nome = 'Camiseta';
Object.freeze(novoProduto); //congela e bloqueia as alterações -> funciona para o objeto e não para a referência... 
novoProduto.preco = 3.9;
console.log(produto);
console.log(novoProduto);

novoProduto2 = Object.assign({}, produto, { material: "Algodão"});
console.log(produto);
console.log(novoProduto2);

novoProduto3 = { nome: produto.nome, preco: produto.preco, material: "Algodão"};

//obter as chaves do objeto
console.log(Object.keys(produto));

//obter detalhes de uma propriedade do objeto
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
Object.defineProperty(produto, 'nome', { writable: false, configurable: false});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
delete produto.nome; //não permite por o configurable é false
console.log(produto);

//Obtém os valores do objeto
console.log(Object.values(produto));

//obter array com chave e valor do objeto
console.log(Object.entries(novoProduto));

for (let entry of Object.entries(novoProduto)){
    console.log(entry);
}
for (let [chave, valor] of Object.entries(novoProduto)){
    console.log(chave, valor);
}
