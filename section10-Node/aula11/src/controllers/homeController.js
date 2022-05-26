exports.home = (req, res) => {
    res.render('index');
}

exports.trataPost = (req,res) => {
    res.send('Tratamento da rota POST.');
}