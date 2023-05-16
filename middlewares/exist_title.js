import Manga from '../models/Manga.js'

async function titleExistsCreate(req,res,next){
    const title = await Manga.findOne({title: req.body.title})
    if(title){
        return res.status(400).json({
            success: false,
            message: ['This title already exists']
        })
    }
    return next()
}
export default titleExistsCreate