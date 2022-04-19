//lazy avaluation

function* genaration1() {
    //bloco
    yield 'Valor 1';

    return function(){
        console.log('Vim do return');
    }
    //bloco
    yield 'Valor 2';
    //bloco
    yield 'Valor 3';
}

const g1 = genaration1();

// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next());

for (let valor of g1) {
    console.log(valor);
}

function* generation2() {
    let i = 0;
    while (i < 50) {
        yield i;
        i++;
    }
}

const g2 = generation2();
for (let valor of g2) {
    console.log(valor);
}

function* genaration3() {
    yield 0;
    yield 1;
    yield 2;
}

function* generation4() {
    yield* genaration3();
    yield 3;
    yield 4;
    yield 5;
    yield 6;
}

const g4 = generation4();

for (let valor of g4) {
    console.log(valor);
}

function* generation5() {
    yield function() {
        console.log('Vim do y1');
    }

    yield function() {
        console.log('Vim do y2');
    }
}

const g5 = generation5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();
