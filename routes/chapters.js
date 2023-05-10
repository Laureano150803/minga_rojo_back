//aca voy a definir los endpoints de los autores 
//y los voy a exportar para poder utilizarlos 
import { Router } from "express";
import create from "../controllers/chapters/create.js"
// import read from "../controllers/chapters/get_one.js";
import validator from "../middlewares/validator.js";
import {chapterCreate} from '../schemas/chapters.js'
import chapterExists from "../middlewares/accountChapter.js";
import orderExists from "../middlewares/exists_order.js";
import nextOrder from "../middlewares/next_order.js";
import get_chapters from "../controllers/chapters/get_chapters.js";


let router = Router()
// router.get('/', read)
router.post('/',validator(chapterCreate), chapterExists,orderExists,nextOrder,  create)
router.get('/',get_chapters)
export default router
