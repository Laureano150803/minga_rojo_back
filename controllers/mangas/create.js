import Manga from "../../models/Manga.js";

let create = async(req,res,next)=>{
  try {
    let manga = req.body
    manga.author_id='64491d9923f2033adb18b0dc'
    manga.company_id='64491d9723f2033adb18b0c9'
    manga.cover_photo="https://i.postimg.cc/Nj4bXyr2/main-shingeki-no-kyojin.png"
  

    let one= await Manga.create(req.body)
    return res.status(201).json({
      response:one._id,
      timestamps:one.createdAt
    })

  } catch (error) {
      next(error)
  }
}

export default create