import createHttpError from "http-errors";
import User from '../../models/User.js'

import crypto from 'crypto'
import bcryptjs from 'bcryptjs' 


// crypto.randomBytes(10).toString('hex')
let create = async(req,res,next)=>{

    try {

        const {firebaseUrl} = req.file || '';
        const {email, password} = req.body;

        const user = new User({
            email, 
            password,
            photo: firebaseUrl,
        });
        user.is_online = false
        user.role = 0
        user.is_verified = true
        user.verify_code = crypto.randomBytes(10).toString('hex')
        user.password = bcryptjs.hashSync(req.body.password,10)

        await user.save()
        return res.status(201).json({
            user:user,
            success:true,
            timestamps:user.createdAt
        })
    } catch(error){
        console.log(error)
        next(error)
    }
}

export default create
