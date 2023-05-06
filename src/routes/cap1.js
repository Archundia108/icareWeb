const express = require('express');
const ruta = express.Router(); //Para las rutas
module.exports = ruta; //Para exportar esta función o constante
/*------------------------ express -----------------------*/

/*------------------------ Extras -----------------------*/
// const { v4: uuidv4 } = require('uuid');
/*------------------------ Extras -----------------------*/
// const bcrypt = require('bcrypt');
// const nodemailer = require("nodemailer");
// const multer = require('multer');
// const ejs = require('ejs');
// const path = require('path');
/*------------------------AWS -----------------------*/

/*------------------------AWS -----------------------*/

/*-------------------------------------------------------------------- RUTAS LOGIN */

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   lOGIN
ruta.get('/', (req, res) => {
    res.render('index');
});