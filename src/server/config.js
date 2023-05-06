const path = require('path');

const express = require('express');

//Carpetas de rutas
const cap1 = require('../routes/cap1');


module.exports = app => {

    //Settings
    app.set('port', process.env.PORT || 3000);



    //Motor de vistas
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../views'));

    //Carpeta estática
    app.use('/', express.static(path.join(__dirname, '../public')));
    app.use(express.urlencoded({ extended: true })); //Para recibir datos del formulario

    //Rutas
    app.use('/', cap1);
    app.use('/cap1', cap1);


    return app;
}