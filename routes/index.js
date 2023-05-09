import express from 'express'
import authorRouter from './authors.js'
import userRouter from './auth.js'
import categoryRouter from './categories.js'
import chapterRouter from './chapters.js'
import companyRouter from './companies.js'
import mangaRouter from './mangas.js'
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MINGA API', 
  subtitle: 'Endpoints of Minga' });
});

const midd1 = (req,res,next)=>{  //funcion para peticion a categories
    console.log(`solo estoy en categories`);
    next()
}    

router.use('/auth', userRouter)
router.use('/authors', authorRouter)
router.use('/categories',midd1 ,categoryRouter) //peticion a catagories
router.use('/companies', companyRouter)
router.use('/chapters', chapterRouter)
router.use('/mangas', mangaRouter)

export default router;