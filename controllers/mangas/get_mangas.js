import Manga from "../../models/Manga.js";

let mangaGet = async(req,res,next)=>{

  try {
    let {manga_id} = req.params
    
    let all = await Manga.findOne({_id:manga_id})
    return res.status(200)
    .json({
        success: 'ok',
        response: all
    })
}catch (error) {
    next(error)
}
}
export default mangaGet