const express = require('express');
const conectarDB = require('./config/db');

//Servidor 
const app = express();

//Conectamos a la DB
conectarDB();

app.use('/api/productos', require('./routes/producto'))

//Defino ruta principal
/*app.get('/', (req, res) => {
    res.send('Hola mundo');
})*/

app.listen(4000, () => {
    console.log('El servidor está corriendo perfectamente')
})