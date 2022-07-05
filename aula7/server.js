const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    NAME: <input type="text" name="name">
    <button>Submit</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Received Form')
})

app.get('/contato', (req, res) => {
    res.send("Contact route")
})


app.listen(3000, () => {
    console.log("Server executing on 3000 port")
});