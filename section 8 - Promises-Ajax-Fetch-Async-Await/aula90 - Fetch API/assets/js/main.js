document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

//fetch promise
function carregaPagina(el) {
    const href = el.getAttribute('href');

    fetch(href)
        .then(response => {
            if (response.status !== 200) throw new Error('Page not found.');
            return response.text()
        })
        .then(html => carregaResultado(html))
        .catch(e => console.log(e));
}

//fetch with async
async function _carregaPagina(el) {
    const href = el.getAttribute('href');

    try {
        const response = await fetch(href);

        if (response.status !== 200) throw new Error('Page not found.');

        carregaResultado(response.text());
    } catch (e) {
        console.log("Page not found.");
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}