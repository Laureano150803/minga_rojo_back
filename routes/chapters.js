import { Router } from "express";
import create from "../controllers/chapters/create.js"
import read from '../controllers/chapters/read.js'
import validator from "../middlewares/validator.js";
import {chapterCreate} from '../schemas/chapters.js'
import chapterExists from "../middlewares/accountChapter.js";
import orderExists from "../middlewares/exists_order.js";
import nextOrder from "../middlewares/next_order.js";

let router =Router()


router.get('/', read)

router.post('/',validator(chapterCreate), chapterExists,orderExists,nextOrder,  create)

export default router