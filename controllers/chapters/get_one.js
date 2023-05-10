
import Chapter from "../../models/Chapter.js";

let get_one = async(req,res,next)=>{
    try{
        let {_id} = req.params
        let one = await Chapter.findOne({id:_id}, 'pages cover_photo order')
        return res.status(200).json({
            succes:true,
            response: one
        })
        
    }catch(error){
        next(error)
    }
}


export default get_one

