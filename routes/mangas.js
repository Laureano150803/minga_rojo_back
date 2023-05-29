import { Router } from "express";
import { mangasCreate , mangasUpdate} from "../schemas/mangas.js";
//CONTROLLERS
import get_one from "../controllers/mangas/get_one.js";
import create from "../controllers/mangas/create.js";
import mangaGet from "../controllers/mangas/get_mangas.js";
import update from "../controllers/mangas/update.js";
import get_Me from "../controllers/mangas/get_me.js"
import read from "../controllers/mangas/read.js"
import destroy from "../controllers/mangas/destroy.js";
//MIDDLE 
import validator from "../middlewares/validator.js";
import passport from "../middlewares/passport.js"
import titleExistsCreate from "../middlewares/exist_title.js";
import find_id from "../middlewares/finds_id.js"
import is_active from "../middlewares/active.js"
import is_property_of from "../middlewares/is_property_of.js"
import Multer from "../middlewares/multer.js";
import uploadImage from "../services/firebase.cjs";


let router =Router()

/* router.get('/',passport.authenticate('jwt',{session:false}), read) */
router.post('/', Multer.single('cover_photo'),validator(mangasCreate),titleExistsCreate,uploadImage,create)
router.get('/',mangaGet)
router.get('/me', passport.authenticate('jwt', {session: false}),find_id, get_Me)
router.get('/:id', get_one)
router.put('/:id', passport.authenticate('jwt', {session: false}),validator(mangasUpdate),  is_active , is_property_of, find_id , update)
router.delete('/:id', passport.authenticate('jwt', {session: false}), find_id, is_active, is_property_of,  destroy)

export default router