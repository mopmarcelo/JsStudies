exports.middlewareGlobal = (req, res, next) => {
    if(req.body.cliente){
        console.log();
        console.log(`Você postou ${req.body.cliente}`);
        console.log();
    }
    res.locals.umaVariavelLocal = 'Este é o valor da variável do middleware.';
    
    next();
}

// exports.outroMiddleware = (req, res, next) => {
//     next();
// };

exports.checkCsrfError =  (err, req, res, next) => {
    if (err && err.code == 'EBADCSRFTOKEN'){
        //return res.send('BAD CSRF.');
        return res.render('404');
    }
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.crsfToken = req.crsfToken();
    next();
}