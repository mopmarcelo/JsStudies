exports.middlewareGlobal = (req, res, next) => {
    if(req.body.cliente){
        console.log();
        console.log(`Você postou ${req.body.cliente}`);
        console.log();
    }
    next();
}