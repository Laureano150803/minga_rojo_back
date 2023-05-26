import { Router } from 'express';
import donate from '../controllers/mercadopago/post_donate.js'

const router = Router();

router.post('/', donate)


export default router