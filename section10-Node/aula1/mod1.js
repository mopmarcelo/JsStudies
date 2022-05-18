const nome = "Marcelo";
const sobrenome = "Pereira";
const idade = 36;

const falaNome = () => nome + " " + sobrenome;

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

// module.exports = {
//     nome, sobrenome, falaNome
// }

// this._nome = nome;
// this._sobrenome = sobrenome;
// this._falaNome = falaNome;

//console.log(module.exports);


class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;