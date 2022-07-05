const express = require('express');
const app = express();
const routes = require('./routes');


// Para tratar o body das requisições
app.use(express.urlencoded({ extended: true}))
app.use(routes);






app.listen(3000, () => {
    console.log("Server executing on 3000 port")
});