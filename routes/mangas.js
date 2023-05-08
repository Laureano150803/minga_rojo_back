//aca voy a definir los endpoints de los autores 
//y los voy a exportar para poder utilizarlos 
import { Router } from "express";
<<<<<<< HEAD
import { mangasCreate } from "../schemas/mangas.js";
import validator from "../middlewares/validator.js";
import create from "../controllers/mangas/create.js";
import read from '../controllers/mangas/read.js'

let router =Router()

router.get('/', read)
router.post('/',validator(mangasCreate),create)

export default router
=======
import read from '../controller/mangas/read.js'

let router = Router()

// router.post('/', (req, res, next) => res.status(200).send('author creado'))
router.get('/', read)
// router.put('/:id', (req, res, next) => res.status(200).send('autores modificados'))
// router.delete('/:id', (req, res, next) => res.status(200).send('autores borrados'))

export default router;
>>>>>>> 44351fb7bb2ec1c7a54f60f9860cddb613427a07
