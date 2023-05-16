
import Chapter from "../../models/Chapter.js";

let get_one = async(req,res,next)=>{
    try{
        let {id} = req.params
       
       
        let one = await Chapter.findOne({_id:id }, 'pages title  manga_id')
        let next = await Chapter.findOne({ manga_id:one.manga_id}, '_id')
        if(get_one){
            return res.status(200).json({
                succes:true,
                response:one,
                next: next?._id,
            })
        }return res.status(400).json({
            response: 'chapter not found'
        })

        
        
    }catch(error){
        next(error)
    }
}


export default get_one

