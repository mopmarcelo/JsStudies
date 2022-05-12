import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtd = document.querySelector('.qtd-caracteres');
const flMaiusculas = document.querySelector('.chk-maiusculas');
const flMinusculas = document.querySelector('.chk-minusculas');
const flNumeros = document.querySelector('.chk-numeros');
const flSimbolos = document.querySelector('.chk-simbolos');
const btnGerar = document.querySelector('.gerar-senha');

export default () => {
    btnGerar.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    });
}

function gera() {
    const senha = geraSenha(
        qtd.value,
        flMaiusculas.checked,
        flMinusculas.checked,
        flNumeros.checked,
        flSimbolos.checked
    );

    return senha || 'Nada selecionado!';
}