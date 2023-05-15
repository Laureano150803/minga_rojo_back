//aca voy a definir los endpoints de los autores 
//y los voy a exportar para poder utilizarlos 
import { Router } from "express";
import create from "../controllers/chapters/create.js"
import read from "../controllers/chapters/get_one.js";
import validator from "../middlewares/validator.js";
import {chapterCreate} from '../schemas/chapters.js'
import chapterExists from "../middlewares/accountChapter.js";
import orderExists from "../middlewares/exists_order.js";
import nextOrder from "../middlewares/next_order.js";
import get_one from "../controllers/chapters/get_one.js";

let router = Router()

router.get('/:id', get_one)
// router.post('/', (req, res, next) => res.status(200).send('author creado'))
router.get('/', read)
// router.put('/:id', (req, res, next) => res.status(200).send('autores modificados'))
// router.delete('/:id', (req, res, next) => res.status(200).send('autores borrados'))
router.post('/',validator(chapterCreate), chapterExists,orderExists,nextOrder,  create)
router.get('/',get_chapters)
export default router
