// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     title: "Test title!",
//     description: "A test title."
// }).then(data => {
//     console.log(data);
// }).catch(err => console.log(err));


exports.home = (req, res) => {
    //req.session.usuario = { nome: 'Marcelo', logado: 'true'};
    // req.flash('info', 'olá mundo');
    // req.flash('error', 'oops');
    // req.flash('success', 'congrats');
    //console.log(req.flash('error'), req.flash('info'), req.flash('success'));
    
    res.render('index', {
        title: 'Este será o <span style="color:red;">título</span> da página',
        number: [1,2,3,4,5,6,7,8,9]
    });
    return;
}

exports.trataPost = (req,res) => {
    res.send(req.body);
    return;
}