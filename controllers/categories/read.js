import Category from '../../models/Category.js'
import createHttpError from 'http-errors'

let read = async(req,res,next)=>{
    try{
        let all = await Category.find()

        if (all.length > 0) {
            return res.status(200).json({
                categories: all
            })
        }
        
        return next(createHttpError(404, 'El recurso no se encontró'))


    }catch(error){
        console.log(error);
        next(error)
        }
    }


export default read