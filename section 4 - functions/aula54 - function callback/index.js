function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(() => {
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(() => {
        console.log('f2');
        if (callback) callback();
    }, rand());
}
function f3(callback) {
    setTimeout(() => {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

// f1();
// f2();
// f3();

// longer tree
// f1(function () {
//     f2(function () {
//         f3(function () {
//             console.log('Olá mundo!');
//         });
//     });
// });

f1(f1Callback);

function f1Callback() {
    f2(f2CallBack);
}
function f2CallBack(){
    f3(f3CallBack);
} 
function f3CallBack(){
    console.log('Olá mundo.');
}