<<<<<<< HEAD
=======
// var createError = require('http-errors');
// var express = require('express');
>>>>>>> 44351fb7bb2ec1c7a54f60f9860cddb613427a07
import 'dotenv/config.js'
import './config/database.js'

import createError from 'http-errors'
import express from 'express'
<<<<<<< HEAD
=======

>>>>>>> 44351fb7bb2ec1c7a54f60f9860cddb613427a07
import path from 'path';
import cors from 'cors'
import logger from 'morgan';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import cors from 'cors'
=======

import errorHandler from './middlewares/errorHandler.js'
import notFound from './middlewares/notFound.js'


>>>>>>> SPRINT-2
import indexRouter from './routes/index.js';
import authsRouter from './routes/auth.js';
>>>>>>> 44351fb7bb2ec1c7a54f60f9860cddb613427a07
import {__dirname} from './utils.js'
import notFound from './middlewares/notFound.js'; // se importa el error creado en notfound.js
import errorHandler from './middlewares/errorHandler.js';



import indexRouter from './routes/index.js';
import usersRouter from './routes/auth.js';
import notFound from './middlewares/notFound.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));




app.set('view engine', 'ejs');

<<<<<<< HEAD
//middlewares nivel aplicacion
app.use((req, res, next) => {next()})

//middlewares
app.use(cors())
=======
app.use((req,res,next)=>{
  console.log('logged'); //1
//una vez que se ejecuta esto 1
  next() //2
})
//pasa a la siguiente ejecucion //2
app.use(cors()) // middlewars ESTA EJECUCION
>>>>>>> 44351fb7bb2ec1c7a54f60f9860cddb613427a07
app.use(logger('dev'));
app.use(express.json());//verifica la carga util 
app.use(express.urlencoded({ extended: false }));
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, 'public')));
=======
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //HASTA QUE SE EJECUTE LA TAREA PRINCIPAL QUE ES LA RESPUESTA
//__dirname es la direccion absolurta donde se encuentra la raiz de la ubicacion, express le hace la peticion se usa para servir los archivos estaticos en el navegador 


>>>>>>> 44351fb7bb2ec1c7a54f60f9860cddb613427a07

//routers
app.use('/', indexRouter);
<<<<<<< HEAD
app.use(notFound)
app.use(errorHandler)
=======
<<<<<<< HEAD
app.use('/auth', authsRouter);
app.use(notFound)//si no hay ruta ejecuta eror 404
app.use(errorHandler)//
// se borra lo que trae por defecto 
>>>>>>> 44351fb7bb2ec1c7a54f60f9860cddb613427a07



<<<<<<< HEAD

export default app;
=======
export default app;
=======



app.use(notFound) 
app.use(errorHandler)

export default app;
>>>>>>> SPRINT-2
>>>>>>> 44351fb7bb2ec1c7a54f60f9860cddb613427a07
