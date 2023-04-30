import express from 'express'
import create from '../controllers/users/auth.js'
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* router.get('/admins',(rq,res,next)=>res.status(200).json({
  success:true,
  admins:[]
})) */

router.post('/signup',create)

export default router;
