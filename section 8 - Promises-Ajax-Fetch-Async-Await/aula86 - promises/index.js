function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function waitThere(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg);
        if (cb) cb();
    }, tempo);
}

// waitThere('Frase 1', rand(1, 3));
// waitThere('Frase 2', rand(1, 3));
// waitThere('Frase 3', rand(1, 3));

// waitThere('Frase 1', rand(1, 3), function () {
//     waitThere('Frase 2', rand(1, 3), function () {
//         waitThere('Frase 3', rand(1, 3));
//     });
// });



//--------------------------------------------------------------------------------------------------

function waitThere2(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('Bad Value');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}


waitThere2('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return waitThere2('Frase 2', rand(1,3));
    })
    .then(resposta2 => {
        console.log(resposta2);
        return waitThere2('Frase 3', rand(1,3));
    })
    .then(resposta3 => {
        console.log(resposta3);
        return waitThere2(123, rand(1,3));
    })
    .catch(e => {
        console.log(e);
    });