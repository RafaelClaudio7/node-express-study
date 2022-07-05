
const path = require('path');
const filePath = path.resolve(__dirname, 'test.json');
const write = require('./modules/write');
const read = require('./modules/read');


const persons = [
    {name: 'João'},
    {name: 'Rafael'},
    {name: 'Claudio'},
    {name: 'Tula'}
];

const jsonC = JSON.stringify(persons, '', 2);

write(filePath, jsonC);


async function readFile(filesPath) {
    const data = await read(filesPath);
    renderData(data);
}

function renderData(data) {
    data = JSON.parse(data);
    data.forEach(value => console.log(value));
}


readFile(filePath);