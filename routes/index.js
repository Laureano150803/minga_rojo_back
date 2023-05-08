import express from 'express'
import usersRouter from './auth.js' 
import authorRouter from './authors.js'
<<<<<<< HEAD
import userRouter from './auth.js'
import categoryRouter from './categories.js'
import chapterRouter from './chapters.js'
import companyRouter from './companies.js'
import mangaRouter from './mangas.js'
=======
import categoriesRouter from './categories.js'
import companiesRouter from './companies.js'
import chaptersRouter from './chapters.js'
import mangasRouter from './mangas.js'

>>>>>>> 44351fb7bb2ec1c7a54f60f9860cddb613427a07
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MINGA API', 
  subtitle: 'Endpoints of Minga' });
});

<<<<<<< HEAD
//middlewares nivel routers
const midd1= (req,res,next)=>{
  console.log(`Solo estoy en categories`)
  next()
}

router.use('/auth', userRouter)
router.use('/authors', authorRouter)
router.use('/categories',midd1, categoryRouter)
router.use('/chapters', chapterRouter)
router.use('/companies', companyRouter)
router.use('/mangas', mangaRouter)
=======
const midd1 = (req,res,next)=>{  //funcion para peticion a categories
    console.log(`solo estoy en categories`);
    next()
}    
>>>>>>> 44351fb7bb2ec1c7a54f60f9860cddb613427a07

router.use('/auth', usersRouter)
router.use('/authors', authorRouter)
router.use('/categories',midd1 ,categoriesRouter) //peticion a catagories
router.use('/companies', companiesRouter)
router.use('/chapters', chaptersRouter)
router.use('/mangas', mangasRouter)

export default router;