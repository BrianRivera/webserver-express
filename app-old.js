const http = require('http');

http.createServer((req, res) => {
        //write devuelve pagina web    
        //writeHead devuelve objeto json(servicio)
        //res.write('hola mundo');

        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'brian',
            edad: 32,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);

console.log('escuchando el puerto 8080');