import Manga from '../../models/Manga.js'

let create = async(req,res,next)=>{
    try {

        const {firebaseUrl} = req.file || '';
        const {title, category_id, description} = req.body;
        
        const manga = new Manga({
            title,
            category_id,
            description,
            cover_photo:firebaseUrl
        })

        await manga.save()
        res.status(200).json({message: 'Manga created successfully'})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export default create