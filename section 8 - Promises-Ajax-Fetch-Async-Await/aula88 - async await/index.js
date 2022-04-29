function rand(min = 0, max = 3) {
    return Math.floor(Math.random() * (max - min) + min);
}

function waitThere(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Bad Value');
                return;
            }

            resolve(msg.toUpperCase());
            return;
        }, tempo);
    });
}

// waitThere('Promise 1', rand())
//     .then(res => {
//         console.log(res);
//         return waitThere('Promise 2', rand());
//     })
//     .then(res2 => {
//         console.log(res2);
//         return waitThere('Promise 3', rand());
//     })
//     .then(res3 => {
//         console.log(res3);
//     })
//     .catch(e => console.log(e));

async function executa() {
    try {
        const fase1 = await waitThere('Promise 1', rand());
        console.log(fase1);

        const fase2 = await waitThere('Promise 2', rand());
        console.log(fase2);
        
        //encerra aqui pois vai para o catch
        const faseErro = await waitThere(1000, rand());

        const fase3 = await waitThere('Promise 2', rand());
        console.log(fase3);

    } catch (e) {
        console.log(e);
    }
}

executa();