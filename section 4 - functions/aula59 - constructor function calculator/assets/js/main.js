function Calculadora() {
    this.display = document.querySelector('.display');
    btnClear = document.querySelector('.btn-clear');
    this.arrOperators = ['/', '*', '-', '+', '=', '.' ];

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-del')) this.apagaUm();
            if (el.classList.contains('btn-eq')) this.realizaConta();

            this.display.focus();
        });
    }

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
                return;
            }

            if (Number.isNaN(e.target.value) && !this.arrOperators.includes(e.target.value) && e.target.value !== '0')
                return;
        });
    };

    this.btnParaDisplay = valor => {
        const lastChar = this.display.value.substring(this.display.value.length - 1);
        if (Number.isNaN(valor) && valor === lastChar && valor !== '0')
            return;

        if (this.arrOperators.includes(valor) && this.arrOperators.includes(lastChar)) {
            this.display.value = this.display.value.replace(lastChar, valor);
            return;
        }

        if (Number.isNaN(valor) && !this.arrOperators.includes(valor) && valor !== '0')
            return;

        this.display.value += valor;
    };

    this.clearDisplay = () => this.display.value = '';
    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            this.soNumeros();

            conta = eval(conta);
            if (!conta && conta !== 0) {
                alert('Conta inválida.');
                return;
            }
            this.display.value = conta;
        } catch (e) {
            alert('Conta inválida.');
        }
    };

    this.soNumeros = () => {
        let arrValor = [...this.display.value];

        for (let char of arrValor) {
            if (Number(char))
                continue;
            else if (this.arrOperators.includes(char))
                continue;
            else if (char === '0')
                continue;
            else
                throw new TypeError();

        }
    };
}


const calculadora = new Calculadora();
calculadora.inicia();

