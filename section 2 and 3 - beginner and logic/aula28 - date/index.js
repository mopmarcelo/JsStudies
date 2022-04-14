// date 0 = 01/01/1970 timestamp unix
const quatroHoras = 60 * 60 * 4 * 1000;
const umDia = 60 * 60  * 24 * 1000;
const data = new Date(0 + quatroHoras + umDia);

console.log(data.toString());

const dataAgora = new Date();
console.log(dataAgora);

const data1 = new Date(2022, 3, 13, 13, 50, 00);
console.log(data1.toString());

const data2 = new Date('2022-04-13 13:55:35:125');
console.log(data2.toString());

console.log("Dia", data2.getDate());
console.log("Mês", data2.getMonth());
console.log("Ano", data2.getFullYear());
console.log("Hora", data2.getHours());
console.log("Minuto", data2.getMinutes());
console.log("Segundo", data2.getSeconds());
console.log("ms", data2.getMilliseconds());
console.log("Dia Semana", data2.getDay());

function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const minuto = zeroEsquerda(data.getMinutes());
    const segundo = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const data3 = new Date();
const dataBrasil = formataData(data3);
console.log(dataBrasil);