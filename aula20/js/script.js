function meuEscopo(){
    const form = document.querySelector('#form1');
    const resultado = document.querySelector('#resultado');

    const pessoas = [];

    function recebeEventoForm(event){
        event.preventDefault();
    
        let nome = form.querySelector('#nome').value;
        let sobrenome = form.querySelector('#sobrenome').value;
        let peso = form.querySelector('#peso').value;
        let altura = form.querySelector('#altura').value;  
        
        criarPessoa(nome, sobrenome, peso, altura);
        
        form.reset();
    }
    
    function criarPessoa(nome, sobrenome, peso, altura){
        pessoas.push({nome, sobrenome, peso, altura});
        
        resultado.innerHTML += `<p>Nome: ${nome}, Sobrenome: ${sobrenome}, Peso: ${peso}, Altura ${altura}.</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
