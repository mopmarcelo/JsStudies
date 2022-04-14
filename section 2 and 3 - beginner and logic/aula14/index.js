let num1 = 1500;
let num2 = 2.5;
let num3 = 10.6579879614;

console.log(num1 + num2);

console.log(`${num1}${num2}`);
console.log(num1.toString() + num2);
console.log(typeof num1);
console.log(num1.toString(2));
console.log(num3.toFixed(3));
console.log(Number.isInteger(num1));
console.log(Number.isInteger(num3));
console.log(Number.isNaN(num1 * 'ola'));

let num4 = 0.7;
let num5 = 0.1;
console.log(num4 + num5);
num4 += num5;
num4 += num5;
num4 += num5;
console.log(num4);

let num6 = num4.toFixed(2);
console.log(num4, Number.isInteger(num6));
num6 = Number(num4.toFixed(2));
console.log(num6, Number.isInteger(num6));

num4 = 0.7;
num5 = 0.1;
num4 = ((num4 * 100) + (num5 * 100)) / 100;
num4 = ((num4 * 100) + (num5 * 100)) / 100;
num4 = ((num4 * 100) + (num5 * 100)) / 100;
console.log(num4);