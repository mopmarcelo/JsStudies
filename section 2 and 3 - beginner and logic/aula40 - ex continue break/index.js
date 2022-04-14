const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let num of numeros) {
    if (num % 2 === 0)
        continue;
    
    if (num === 7)
        break;
        
    console.log(num);
}