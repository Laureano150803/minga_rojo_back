//aca voy a definir los endpoints de los autores 
//y los voy a exportar para poder utilizarlos 
import { Router } from "express";
<<<<<<< HEAD
import read from '../controller/chapters/read.js'
=======
import create from "../controllers/chapters/create.js"
import read from '../controllers/chapters/read.js'
import validator from "../middlewares/validator.js";
import {chapterCreate} from '../schemas/chapters.js'
import chapterExists from "../middlewares/accountChapter.js";
import orderExists from "../middlewares/exists_order.js";
import nextOrder from "../middlewares/next_order.js";

let router =Router()
>>>>>>> SPRINT-2

let router = Router()

// router.post('/', (req, res, next) => res.status(200).send('author creado'))
router.get('/', read)
// router.put('/:id', (req, res, next) => res.status(200).send('autores modificados'))
// router.delete('/:id', (req, res, next) => res.status(200).send('autores borrados'))

<<<<<<< HEAD
export default router;
=======
router.post('/',validator(chapterCreate), chapterExists,orderExists,nextOrder,  create)

export default router
>>>>>>> SPRINT-2
