import express from 'express'
import signup from '../controller/auths/signup.js';
import accountExistsSignUp from '../middlewares/accountSignUp.js';
import validator from '../middlewares/validator.js';
import { userRegister,userSesion } from '../schemas/users.js';
import signin from '../controller/auths/signin.js';
import accountExistsSignIn from '../middlewares/accountSignIn.js';
import isVerified from '../middlewares/isVerified.js'
import passwordIsOk from '../middlewares/passIsOk.js';
import signout from '../controller/auths/signout.js';
import passport from '../middlewares/passport.js';
import token from '../controller/auths/token.js';
import Multer from '../middlewares/multer.js';
import uploadImage from '../services/firebase.cjs';

const router = express.Router();


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/admins',(req,res,next)=>res.status(200).json({
  success:true,
  admins:[]
}))

router.post("/token",passport.authenticate("jwt", {session: false}),token)
router.post("/signup",Multer.single(`photo`),validator(userRegister),accountExistsSignUp,uploadImage,signup)
router.post("/signin",validator(userSesion),accountExistsSignIn,isVerified,passwordIsOk,signin)
router.post("/signout",passport.authenticate("jwt", {session: false}),signout)


export default router;
