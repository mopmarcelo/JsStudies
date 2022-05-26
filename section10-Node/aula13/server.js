const express = require('express');
const routes = require('./routes');
const app = express();
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

//tratamento para acessar req.body
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//meus próprios middlewares
app.use(middlewareGlobal);
app.use(routes);

app.listen(3000, () => {
    console.log('Server running in http://localhost:3000');
});
