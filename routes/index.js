/* var express = require('express'); */
import express from 'express'
import authorRouter from './authors.js'
import userRouter from './users.js'
import categoryRouter from './categories.js'
import chapterRouter from './chapters.js'
import companyRouter from './companies.js'
import mangaRouter from './mangas.js'
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
 subtitle:'algo'});
});

router.use('/auth', userRouter)
router.use('/authors', authorRouter)
router.use('/categories', categoryRouter)
router.use('/chapters', chapterRouter)
router.use('/companies', companyRouter)
router.use('/mangas', mangaRouter)

export default router;
