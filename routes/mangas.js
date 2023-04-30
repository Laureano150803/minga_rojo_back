import { Router } from "express";
import create from "../controllers/mangas/create.js";
import read from '../controllers/mangas/read.js'
let router =Router()

router.get('/', read)
router.post('/comics',create)

export default router