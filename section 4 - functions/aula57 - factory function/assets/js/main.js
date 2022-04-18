//factory function
function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        arrOperators: ['/', '*', '-', '+', '=', '.'],

        inicia() {
            this.cliqueBotoes();
        },
        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                    return;
                }

                if (Number.isNaN(e.target.value) && !arrOperators.includes(e.target.value))
                    return;
            });
        },
        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus();
            });
        },
        btnParaDisplay(valor) {
            const lastChar = this.display.value.substring(this.display.value.length - 1);
            if (Number.isNaN(valor) && valor === lastChar)
                return;

            if (this.arrOperators.includes(valor) && this.arrOperators.includes(lastChar)){
                this.display.value = this.display.value.replace(lastChar, valor);
                return;
            }

            if (Number.isNaN(valor) && !arrOperators.includes(valor))
                return;

            this.display.value += valor;
        },
        clearDisplay() {
            this.display.value = '';
        },
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        realizaConta() {
            let conta = this.display.value;

            try {
                this.soNumeros();

                conta = eval(conta);
                if (!conta) {
                    alert('Conta inválida.');
                    return;
                }
                this.display.value = conta;
            } catch (e) {
                alert('Conta inválida.');
            }
        },
        soNumeros() {
            let arrValor = [...this.display.value];

            for (let char of arrValor) {
                if (Number(char))
                    continue;
                else if (arrOperators.includes(char))
                    continue;
                else
                    throw new TypeError();

            }
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
