const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
//express hbs engine
app.set('view engine', 'hbs');

//helpers (variables generales para enviar a todas las paginas)



app.get('/', (req, res) => {
    //res.send('Hello World')
    //express se ocupa de identificar si es un json
    res.render('home', {
        nombre: 'Brian',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    //res.send('Hello World')
    //express se ocupa de identificar si es un json
    res.render('about', {
        anio: new Date().getFullYear()
    });
});
// app.get('/data', (req, res) => {
//     res.send('Hello data')

// });



app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);

});