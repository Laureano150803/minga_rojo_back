import 'dotenv/config.js'
import './config/database.js'

import createError from 'http-errors'
import express from 'express'
import path from 'path';
import cors from 'cors'
import logger from 'morgan';
import {__dirname} from './utils.js'


import indexRouter from './routes/index.js';
import usersRouter from './routes/auth.js';
import notFound from './middlewares/notFound.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares nivel aplicacion
app.use((req,res,next)=>{
  console.log(`logged`)
  next()
})

//middlewares
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//routers
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(notFound)
app.use(errorHandler)

export default app;