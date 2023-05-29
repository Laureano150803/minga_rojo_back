//aca voy a definir los endpoints de los autores 
//y los voy a exportar para poder utilizarlos 
import { Router } from "express";
import create from "../controllers/chapters/create.js"
import get_one from "../controllers/chapters/get_one.js";
import validator from "../middlewares/validator.js";
import {chapterCreate} from '../schemas/chapters.js'
import chapterExists from "../middlewares/accountChapter.js";
import orderExists from "../middlewares/exists_order.js";
import nextOrder from "../middlewares/next_order.js";
import read from "../controllers/chapters/read.js";
import get_chapters from '../controllers/chapters/get_chapters.js'
import passport from "../middlewares/passport.js";
import finds_id from '../middlewares/finds_id.js'
import is_active from "../middlewares/is_active.js"
import is_property_of from "../middlewares/is_property_of.js"
import destroy from "../controllers/chapters/destroy.js"
import update from "../controllers/chapters/update.js"
import get_me from "../controllers/chapters/get_me.js";


let router = Router()

router.get('/me',passport.authenticate('jwt',{session: false}),finds_id,get_me)

router.delete('/:id',passport.authenticate('jwt',{session:false}), finds_id, is_active, is_property_of , destroy )

router.get('/:id', get_me)

router.post('/',validator(chapterCreate), chapterExists,orderExists,nextOrder,  create)


router.put('/:id',passport.authenticate('jwt',{session:false}), finds_id, is_active, is_property_of , update)




export default router
// router.post('/', (req, res, next) => res.status(200).send('author creado'))
/* router.get('/', read) */
// router.put('/:id', (req, res, next) => res.status(200).send('autores modificados'))
// router.delete('/:id', (req, res, next) => res.status(200).send('autores borrados'))