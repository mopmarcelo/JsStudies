const path = require("path");
const write = require('./modules/write');
const read = require('./modules/read');
const filePath = path.resolve(__dirname, 'text.json');

const pessoas = [
    { nome: "Marcelo" },
    { nome: "Bruna" },
    { nome: "Benício" },
    { nome: "Juraci" },
    { nome: "Maria" },
    { nome: "Antônio" }
];

const json = JSON.stringify(pessoas, '', 2)

write(filePath, json);

async function readData(filePath) {
    const data = await read(filePath);
    renderData(data);
}

function renderData(data) {
    const dataFile = JSON.parse(data);
    dataFile.forEach(value => console.log(value));
}

readData(filePath);
