function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function waitThere(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Bad Value');
            return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase());
        }, tempo);
    });
}

//Promise.all .race .resolve .reject
const promises = [
    'Primeiro Valor',
    waitThere('Promise 1', 3000),
    waitThere('Promise 2', 500),
    waitThere('Promise 3', 1000),
    //waitThere(1000, 1000),
    'Outro valor'
];

//qdo não importa a ordem de resolução das promises, pode resolver todas
Promise.all(promises)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(valor){
        console.log("Erro " + valor);
    });


const promisesRace = [
    waitThere('Promise 1', rand(1,5)),
    waitThere('Promise 2', rand(1,5)),
    waitThere('Promise 3', rand(1,5)),
    //waitThere(1000, rand(1,5)),
];

//tipo uma corrida... retorna a primeira resolvida
Promise.race(promisesRace)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(valor){
        console.log("Erro " + valor);
    });

function baixaPagina() {
    const emCache = false;

    if (emCache){
        //return Promise.resolve('Pagina em cache');
        return Promise.reject('Pagina em cache');
    } else {
        return waitThere('Baixei a página.', rand(3,5));
    }
}

baixaPagina()
    .then(res => {
        console.log(res);
    })
    .catch(e => console.log("ERRO: " + e));