require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('conectado');
    app.emit('ready');
});

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');
const helmet = require('helmet');
const csrf = require('csurf');

app.use(helmet());

//tratamento para acessar req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(csrf());
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOption = session({
    secret: 'a1s2d3f4',
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOption);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//meus próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('ready', () => {
    app.listen(3000, () => {
        console.log('Server running in http://localhost:3000');
    });
});


