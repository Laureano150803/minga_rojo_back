import { Router } from "express";
import read from '../controller/companies/read.js'
import adminCompanies from "../controllers/companies/admin.js";
import update from "../controllers/companies/update.js";
import create from "../controllers/companies/create.js";
import validator from "../middlewares/validator.js";
import {companyCreate} from '../schemas/companies.js'

let router = Router()

// router.post('/', (req, res, next) => res.status(200).send('author creado'))
router.get('/', read)
router.get('/admin', adminCompanies)
router.put('/:id', update)
router.post('/',validator(companyCreate), create)
// router.put('/:id', (req, res, next) => res.status(200).send('autores modificados'))
// router.delete('/:id', (req, res, next) => res.status(200).send('autores borrados'))

export default router;