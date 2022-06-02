// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     title: "Test title!",
//     description: "A test title."
// }).then(data => {
//     console.log(data);
// }).catch(err => console.log(err));


exports.home = (req, res) => {
    res.render('index');
}

exports.trataPost = (req,res) => {
    res.send(req.body);
    return;
}