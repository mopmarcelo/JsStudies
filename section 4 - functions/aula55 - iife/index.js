// IIFE -> Immediately invoked function expression

// function qualquerCoisa(){
//     console.log('Aqui');
// }

// qualquerCoisa();

(function(){
    const nome = 'Marcelo';
    console.log(nome);

    function criaNome(nome){
        return nome + ' ' + 'Pereira';
    }
    function falaNome(){
        console.log(criaNome('Benício'));
    }

    falaNome();

})();

(function(idade, peso, altura){
    
    function montaFrase(idade, peso, altura){
        return `Idade: ${idade}, Peso: ${peso}, Altura: ${altura}`;
    }
    const frase = montaFrase(idade, peso, 1.70);

    console.log(frase);
})(35, 80, 1.67);