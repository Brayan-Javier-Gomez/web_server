const express = require('express')
const app = express();
require('./hbs/helpers')
const hbs = require('hbs');


//CARPETA PUBLICA

app.use(express.static(__dirname + '/public'));

//EXPRESS HBS

app.set('view engine', 'hbs');

//PARTIALS 

hbs.registerPartials(__dirname + '/views/partials')

//RUTAS

app.get('/', (req, res) => {
    res.render('home', {
        name: 'BrAyan'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        name: 'Brayan'
    })
})


//PUERTO SERVIDOR
//OBTIENE EL PUERTO QUE LE ASIGNA EL HOSTING

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening in port ${port}`);
})