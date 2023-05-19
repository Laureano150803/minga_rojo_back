import Author from '../../models/Author.js'
import createHttpError from 'http-errors'



let admin = async(req,res,next)=>{
    try{
        let active = await Author.find({active:true})
        let inactive = await Author.find({active:false})
        res.status(200).json({
            active:active,
            inactive:inactive
        })
        

    }catch(error){
        console.log(error);
        next(error)
        }
    }

export default admin