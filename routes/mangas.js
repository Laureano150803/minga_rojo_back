//aca voy a definir los endpoints de los autores 
//y los voy a exportar para poder utilizarlos 
import { Router } from "express";
import { mangasCreate } from "../schemas/mangas.js";
import validator from "../middlewares/validator.js";
import create from "../controllers/mangas/create.js";
import read from '../controllers/mangas/read.js'
import get_one from "../controllers/mangas/get_one.js";
import get_MeChapters from "../controllers/chapters/get_me.js";

let router =Router()

router.get('/chapters/me',get_MeChapters,)
router.get('/', read)
router.get('/:id', get_one)
router.post('/mangas',create)
router.post('/',validator(mangasCreate),create)


export default router
