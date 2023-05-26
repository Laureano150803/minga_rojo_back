import createHttpError from 'http-errors'
import Author from '../../models/Author.js' 
const controller = {
    create:  async(req,res,next) => {
        
        try
         {
            let one = await Author.create(req.body)
            return res.status(201).json({
            success: true,
            Response: one,

            })
        } catch (error) {
            next(error)
        }
    }
    }
 export default controller