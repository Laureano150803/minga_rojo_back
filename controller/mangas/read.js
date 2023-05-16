import Manga from "../../models/Manga";
let read = async (req,res,next)=>{
    if (req.query.title){
        queries.title =new ReqExp(req,query.title.trim(),"i")
    }
    if (req,queries.category_id){
        queries.category_id = req.query.category_id
    }
    console.log(queries)
    try {
        let all = await Manga.find(queries)
        return res.status(200).json({
            success:true,
            response:all
        })
        
    }    catch(error){
        next(Error)
    }
}