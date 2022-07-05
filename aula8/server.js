const express = require('express');
const app = express();


// Para tratar o body das requisições
app.use(express.urlencoded({ extended: true}))



app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    NAME: <input type="text" name="name">
    <button>Submit</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`What you send was: ${req.body.name}`)
});

app.get('/testes/:idUsers?/:parametro?', (req, res) => {
    console.log(req.params);
    res.send(req.params);
});




app.listen(3000, () => {
    console.log("Server executing on 3000 port")
});