const nome = "Marcelo";
const sobrenome = "Pereira";
const idade = 36;

export {
    nome as nomePessoa
};

function soma(x, y) {
    return x + y;
}

export {
    nome,
    sobrenome,
    idade,
    soma
};


export const altura = 1.67;

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

//Pode ter apenas uma exportação default

//Define como objeto padrão de exportação do módulo
export /*default*/ function multiplica(x, y) {
    return x * y;
}

export default (x, y) => x ** y;

//export { nome as default }; //forma de exportar uma const como default