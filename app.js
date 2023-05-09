import 'dotenv/config.js'
import './config/database.js'
import createError from 'http-errors'
import express from 'express'
import path from 'path';
import cors from 'cors'
import logger from 'morgan';
import indexRouter from './routes/index.js';
import authsRouter from './routes/auth.js';
import {__dirname} from './utils.js'
import notFound from './middlewares/notFound.js'; // se importa el error creado en notfound.js
import errorHandler from './middlewares/errorHandler.js';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));




app.set('view engine', 'ejs');

//middlewares nivel aplicacion
app.use((req, res, next) => {next()})

//middlewares
app.use(cors())
app.use(logger('dev'));
app.use(express.json());//verifica la carga util 
app.use(express.urlencoded({ extended: false }));
/* app.use(cookieParser()); */
app.use(express.static(path.join(__dirname, 'public'))); //HASTA QUE SE EJECUTE LA TAREA PRINCIPAL QUE ES LA RESPUESTA
//__dirname es la direccion absolurta donde se encuentra la raiz de la ubicacion, express le hace la peticion se usa para servir los archivos estaticos en el navegador 



//routers
app.use('/', indexRouter);

app.use(notFound)
app.use(errorHandler)


app.use('/auth', authsRouter);
app.use(notFound)//si no hay ruta ejecuta eror 404
app.use(errorHandler)//
// se borra lo que trae por defecto 


export default app;

