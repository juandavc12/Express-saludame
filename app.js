const express = require('express');
const app = express ();

app.get('/', (req, res) => {
    let nombre = req.query.nombre;
    if( nombre === '' || nombre === undefined){
        res.send('<h1>Hola desconocido!</h1>')
    }
    else{
    res.send('<h1>Hola ' + nombre +  '!</h1>')
    }
});

app.listen(3000, () => console.log('listening in port 3000 xD'));