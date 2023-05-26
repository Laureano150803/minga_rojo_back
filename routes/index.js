import express from 'express'
import authorRouter from './authors.js'
import userRouter from './auth.js'
import categoryRouter from './categories.js'
import chapterRouter from './chapters.js'
import companyRouter from './companies.js'
import mangaRouter from './mangas.js'
import donateRouter from './donate.js'

const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'MINGA API', 
  subtitle: 'Endpoints of Minga' });
});

const midd1 = (req,res,next)=>{  
    next()
}    

router.use('/auth', userRouter)
router.use('/authors', authorRouter)
router.use('/categories',midd1 ,categoryRouter) 
router.use('/companies', companyRouter)
router.use('/chapters', chapterRouter)
router.use('/mangas', mangaRouter)
router.use('/donate',donateRouter)

export default router;