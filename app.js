const express = require('express');
const config = require('./src/server/config');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');

const app = config(express());


app.listen(app.get('port'), () => {
    console.log("Servidor en el puerto", app.get('port'));
});


// const express = require('express');
// const app = express();
// const path = require('path');
// const ruta = express.Router();

// //Rutas

// //const cap1 = require('src/routes/cap1');
// const x = require('/icare/src/server/config');

// app.set('appName', 'icare');
// app.set('port', process.env.PORT || 3000);

// //Configuraciones
    
//     //Motor de vistas
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'src/views'));


// app.listen(app.get('port'), () => {
//     console.log(app.get('appName'));
//     console.log('Server on port ', app.get('port'));
// });

// //Carpeta estática
// app.use('/', express.static(path.join(__dirname, 'src/assets/public')));
// app.use(express.urlencoded({ extended: true })); //Para recibir datos del formulario

