//aca voy a definir los endpoints de los autores 
//y los voy a exportar para poder utilizarlos 
import { Router } from "express";
import read from '../controller/authors/read.js'
import admin from '../controllers/authors/admin.js'
import update from "../controllers/authors/update.js";
import validator from "../middlewares/validator.js";
import create from "../controllers/authors/create.js";
import { authorCreate } from "../schemas/authors.js";

let router = Router()

// router.post('/', (req, res, next) => res.status(200).send('author creado'))
router.get('/', read)
router.get('/admin', admin)
router.put('/:id', update)
router.post('/', validator(authorCreate), create)
// router.put('/:id', (req, res, next) => res.status(200).send('autores modificados'))
// router.delete('/:id', (req, res, next) => res.status(200).send('autores borrados'))

export default router;