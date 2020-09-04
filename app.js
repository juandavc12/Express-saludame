const express = require('express');
const app = express ();

app.get('/makers/:nombre', (req, res) => {
    let nombre = req.params.nombre;
    // if( nombre === '' || nombre === undefined){
    //     res.send('<h1>Hola desconocido!</h1>')
    // }
    // else{
        function capitalizeFirstLetter(string) {
            const name = string.charAt(0).toUpperCase() + string.slice(1);
            res.send('<h1>Hola ' + name +  '!</h1>')
        }
    capitalizeFirstLetter(nombre)
    // }
});

app.listen(3000, () => console.log('listening in port 3000 xD'));