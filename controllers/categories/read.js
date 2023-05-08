import Category from '../../models/Category.js'
import createHttpError from 'http-errors'
<<<<<<< HEAD
=======


>>>>>>> 44351fb7bb2ec1c7a54f60f9860cddb613427a07

let read = async(req,res,next)=>{
    try{
        let all = await Category.find()

<<<<<<< HEAD
        if(all.length > 0){
            return res.status(200)
            .json({
                categories: all
            })
        }
        return next(createHttpError(404,`El recurso no se encontro`))

    }catch(error){
        console.log(error)
        next(error)
    }
}
=======
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

>>>>>>> 44351fb7bb2ec1c7a54f60f9860cddb613427a07

export default read