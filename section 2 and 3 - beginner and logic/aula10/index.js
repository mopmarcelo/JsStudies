/*
    Operadores aritméticos
        + Adição e Concatenação
        - Subtração
        * Multiplicação
        / Divisão
        ** Potenciação
        % Mod (resto da divisão)
        ++ Incremento
        -- Decremento
*/

const num1 = 2;
const num2 = 10;
console.log(num1 + num2);

const num3 = '7';
console.log(num1 + num3);
console.log(num1 * num3);
console.log(num1 * 'B');

console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);

let contador = 1;
contador++;
console.log(contador);
console.log(contador++);
console.log(++contador);

const passo = 2
let cont = 0;
cont = contador + passo;
console.log(cont);
cont += passo;
console.log(cont);


const num4 = parseInt('5.2');
console.log(num4);
const num5 = parseFloat('5.2');
console.log(num5);
const num6 = Number('5.2');
console.log(num6);
const num7 = Number('B');
console.log(num7);