import { Router } from "express";
import Multer from "../middlewares/multer.js";
import uploadImage from "../services/firebase.cjs";
import create from "../controllers/authors/create.js";
import validator from "../middlewares/validator.js";
import { authorCreate } from "../schemas/authors.js";
import admin from "../controllers/authors/admin.js";
import update from "../controllers/authors/update.js";

let router = Router()

router.get('/admin', admin)
router.put('/:id', update)
router.post('/', Multer.single('photo'), validator(authorCreate), uploadImage,create)


export default router;