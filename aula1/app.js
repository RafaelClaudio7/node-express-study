//const mod1 = require('./mod1');
//const falaNome = require('./mod1').falaNome;
//const {nome} = mod1;
//console.log(nome);

const path = require('path');
const axios = require('axios')


const { Pessoa } = require('./mod1');

const p1 = new Pessoa('Rafael');
console.log(p1.nome)

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => response.data)
    .catch(e => console.log(e)) 