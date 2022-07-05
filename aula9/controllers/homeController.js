exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    NAME: <input type="text" name="name">
    <button>Submit</button>
    </form>
    `);
};

exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de post')
}