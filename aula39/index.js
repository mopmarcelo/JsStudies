let index = 0;

while(index <= 5) {
    console.log(`Index: ${index}`);
    index++;
}


function randon(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
//let rand = randon(min, max);
let rand = 10;

while(rand !== 10){
    rand = randon(min, max);
    console.log(rand);
}

do {
    rand = randon(min, max);
    console.log(rand);
} while (rand !== 10);