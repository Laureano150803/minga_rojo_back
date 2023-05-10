import Manga from "../../models/Manga.js";

let get_one = async(req,res,next)=>{
    try{
        let {id} = req.params
        let one =await Manga.findById(id,'-_id -createdAt -company_id -__v').populate("category_id","name -_id")
        return res.status(200).json({
            success:"ok",
            response: one
        })
    } catch(error){
        next(Error)
    }
}
export default get_one