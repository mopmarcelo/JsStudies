exports.middlewareGlobal = (req, res, next) => {
    if(req.body.cliente){
        console.log();
        console.log(`Você postou ${req.body.cliente}`);
        console.log();
    }
    res.locals.umaVariavelLocal = 'Este é o valor da variável do middleware.';
    
    next();
}