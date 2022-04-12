let numero = Number(prompt("Digite um número"));

while(Number.isNaN(numero)){
    numero = Number(prompt("Digite um número"));
}

document.getElementById("numero_titulo").innerHTML = numero;

let texto = document.getElementById("text");
texto.innerHTML = `<p>Seu número menos 2 é ${numero - 2}</p>`;
texto.innerHTML += `<p>A raíz quadrada do seu número é ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `<p>Seu número é inteiro? ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>Seu número é NaN? ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Seu número arredondado para baixo é ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Seu número arredondado para cima é ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Seu número com duas casas decimais ${numero.toFixed(2)}</p>`;

