/* let createError = require('http-errors');
let express = require('express'); */

import 'dotenv/config.js'
import './config/database.js'
import createError from 'http-errors'
import express from 'express'
import cors from 'cors'
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import errorHandler from './middlewares/errorHandler.js'
import notFound from './middlewares/notFound.js'


import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import {__dirname} from './utils.js'


const app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));




app.set('view engine', 'ejs');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);



app.use(notFound) 
app.use(errorHandler)

export default app;
