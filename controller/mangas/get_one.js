let Manga = require ('../../models/Manga')

let getManga = async(req,res,next)=> {
    try{
        let manga = await Manga.findById(req.params.id).select('')
    }
}