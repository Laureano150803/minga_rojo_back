//aca voy a definir los endpoints de los autores 
//y los voy a exportar para poder utilizarlos 
import { Router } from "express";
import { mangasCreate } from "../schemas/mangas.js";
import validator from "../middlewares/validator.js";
import create from "../controllers/mangas/create.js";
import read from '../controllers/mangas/read.js'

let router =Router()

router.get('/', read)
router.post('/',validator(mangasCreate),create)

export default router
