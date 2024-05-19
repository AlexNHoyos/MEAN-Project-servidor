const express = require('express');

//Servidor 
const app = express();

//Defino ruta principal
app.get('/', (req, res) => {
    res.send('Hola mundo');
})

app.listen(4000, () => {
    console.log('El servidor está corriendo perfectamente')
})