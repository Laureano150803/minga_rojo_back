import 'dotenv/config.js'
import './config/database.js'
import createError from 'http-errors'
import express from 'express'
import path from 'path';
import cors from 'cors'
import logger from 'morgan';
import indexRouter from './routes/index.js';
import {__dirname} from './utils.js'
import notFound from './middlewares/notFound.js';
import errorHandler from './middlewares/errorHandler.js';
import mercadopago from 'mercadopago'
import { Server } from "socket.io";
import { createServer } from "http";


const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares nivel aplicacion
app.use((req, res, next) => {next()})

//middlewares
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/* app.use(cookieParser()); */
app.use(express.static(path.join(__dirname, 'public'))); 


//routers
app.use('/', indexRouter);
app.use(notFound)
app.use(errorHandler)

//MercadoPago



export default app;

