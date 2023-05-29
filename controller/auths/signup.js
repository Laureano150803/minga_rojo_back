import createHttpError from "http-errors";
import User from '../../models/User.js'
import crypto from 'crypto'
import bcryptjs from 'bcryptjs' 
import createTransporter from '../../config/nodemailer.js'


// crypto.randomBytes(10).toString('hex')
let create = async(req,res,next)=>{
    try {
        req.body.is_online = false
        req.body.role = 0
        req.body.is_verified = false
        req.body.verify_code = crypto.randomBytes(10).toString('hex')
        req.body.password = bcryptjs.hashSync(req.body.password,10)
        let one = new User(req.body)
        createTransporter(one)
        .then(info => console.log(info))           
        .catch(error => console.log(error))
        await one.save()

    

        return res.status(201).json({
            user:one,
            success:true,
            timestamps:one.createdAt
        })
    } catch(error){
        console.log(error)
        next(error)
    }
}

export default create
