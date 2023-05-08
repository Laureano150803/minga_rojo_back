import Manga from '../../models/Manga.js'
import createHttpError from 'http-errors'


let read = async(req,res,next)=>{
    try{
        let all = await Manga.find //podemos filtar y restar o buscar por propiedad
        return res.status(200).json({
            success:true,
            response: all
        })
       
    }catch(error){
       next(error)
        }
    }

export default read