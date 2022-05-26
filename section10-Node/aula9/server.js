const express = require('express');
const routes = require('./routes');
const app = express();

//tratamento para acessar req.body
app.use(express.urlencoded({extended: true}));
app.use(routes);

app.listen(3000, () => {
    console.log('Server running in http://localhost:3000');
});
