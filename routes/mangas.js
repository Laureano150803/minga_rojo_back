import { Router } from "express";
import { mangasCreate , mangasUpdate} from "../schemas/mangas.js";
//CONTROLLERS
import get_one from "../controllers/mangas/get_one.js";
import create from "../controllers/mangas/create.js";
import mangaGet from "../controllers/mangas/get_mangas.js";
import get_MeChapters from "../controllers/chapters/get_me.js";
import update from "../controllers/mangas/update.js";
//MIDDLE 
import validator from "../middlewares/validator.js";
import destroy from "../controllers/mangas/destroy.js";
import passport from "../middlewares/passport.js"
import titleExistsCreate from "../middlewares/exist_title.js";
import find_id from "../middlewares/finds_id.js"
import active from "../middlewares/active.js"
import is_property_of from "../middlewares/is_property_of.js"


let router =Router()


router.get('/',mangaGet)
router.get('/chapters/me',get_MeChapters)
router.get('/:id', get_one)
router.get('/me', passport.authenticate('jwt', {session: false}),find_id, get_me)
router.post('/',validator(mangasCreate),titleExistsCreate,create)
router.put('/:id',validator(mangasUpdate), passport.authenticate('jwt', {session: false}), find_id, active, is_property_of,  update)
router.delete('/:id',validator(mangasUpdate), passport.authenticate('jwt', {session: false}), find_id, active, is_property_of,  destroy)



export default router
