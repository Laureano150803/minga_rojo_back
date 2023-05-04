import express from 'express'
import signup from '../controller/auths/signup.js';
import accountExistsSignUp from '../middlewares/accountSignUp.js';
import validator from '../middlewares/validator.js';
import { userRegister,userSesion } from '../schemas/users.js';
import signin from '../controller/auths/signin.js';
import accountExistsSignIn from '../middlewares/accountSignIn.js';
import isVerified from '../middlewares/isVerified.js'
import passwordIsOk from '../middlewares/passIsOk.js';

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/admins',(req,res,next)=>res.status(200).json({
  success:true,
  admins:[]
}))

router.post("/signup",validator(userRegister),accountExistsSignUp,signup)
router.post("/signin",validator(userSesion),accountExistsSignIn,isVerified,passwordIsOk,signin)
export default router;
