/**
 * Operadores lógicos
 *  && -> AND -> E
 *  || -> OR -> OU
 *  ! -> NOT -> NÃO
 */

let expressao = true && true && true;
console.log(expressao);

expressao = true && false && true;
console.log(expressao);

expressao = true || false;
console.log(expressao);

expressao = false || false;
console.log(expressao);

expressao = true && !true;
console.log(expressao);

expressao = !false || false;
console.log(expressao);

let user = 'Luiz';
console.log(user === 'Luiz');

let senha = '123456';
console.log(user === 'Luiz' && senha === '123456');


