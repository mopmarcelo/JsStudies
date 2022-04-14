// string são indexadas
let umaString = "Um texto muito, mas muito 'estranho'";
console.log(umaString);

console.log(umaString[4]);
console.log(umaString[25]);

console.log(umaString.charAt(6));
console.log(umaString.charAt(25));

console.log(umaString.concat(" né"));

console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('Texto'));
console.log(umaString.indexOf('texto', 5));

console.log(umaString.lastIndexOf('a'));
console.log(umaString.lastIndexOf('a', 5));

console.log(umaString.match(/[a-z]/g));
console.log(umaString.match(/[a-z]/));

console.log(umaString.search(/x/));

console.log(umaString.replace('Um', 'Outro'));
console.log(umaString.replace(/Outro/, 'Um'));
console.log(umaString.replace(/e/g, 'E'));

console.log(umaString.length);

console.log(umaString.slice(2,7));
console.log(umaString.slice(-4)); //parte do fim 

console.log(umaString.substring(umaString.length -5));
console.log(umaString.substring(umaString.length -5, umaString.length -1));

console.log(umaString.split(' '));
console.log(umaString.split(' ', 2));

console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());