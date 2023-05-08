import User from "../../models/User.js";
import crypto from 'crypto'
import bcryptjs from 'bcryptjs' 
import  jwt  from "jsonwebtoken";

let signin = async (req,res,next) => {
    console.log("hola")
    try {
        await User.findOneAndUpdate(
            {email:req.body.email},
            
            //ademas esta en re1.user gracias al md
            //{email: req.user.email}
            {is_online: true},
           

        )
        const token =jwt.sign(
            {id: req.user.id},
            process.env.SECRET,
            {expiresIn: 60*60*24}
            
        ) 

            const user ={
                email:req.user.email,
                photo:req.user.photo,
                role:req.user.role,
                id:req.user.id,

            }
            
        return res.status(200).json({
            success: true,
            message: 'user sign in',
            token,
            user
        })

    } catch (error) {
        next(error)
    }
}

export default signin