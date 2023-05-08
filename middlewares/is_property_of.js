import Manga from '../models/Manga.js'

async function propertyOf(req,res,next){
    const mangasId = await Manga.findOne({mangasId: req.body.manga_id, mangasId: req.body.author_id})
    if(mangasId){
        return res.status(400).json({
            success: false,
            message: ['You are not authorized, you are not the author']
        })
    }
    return next()
}
export default propertyOf