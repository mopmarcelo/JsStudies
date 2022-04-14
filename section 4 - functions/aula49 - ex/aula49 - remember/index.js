falaOi();

function falaOi(){
    console.log("Oi");
}

//first class objects (objetos de primeira classe)
//function expression
const souUmDado = function(){
    console.log('Sou um dado');
}

function executaFuncao(funcao){
    funcao();
}

executaFuncao(souUmDado);

// arrow function
const funcaoArrow = () => console.log("sou uma arrow function");

funcaoArrow();

const objeto = {
    falar() {
        console.log("Estou falando")
    }
};

objeto.falar();