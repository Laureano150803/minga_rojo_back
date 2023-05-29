import Chapter from "../../models/Chapter.js"

const create =async(req, res, next)=>{
    try {
        const{firebaseUrl} = req.file || ''
        const {title, order} = req.body


        let chapter = new Chapter({
            title,
            order,
            pages:firebaseUrl
        })
        await chapter.save()
        return res.status (201).json({message: 'Chapter created successfully'})
    } catch (error) {
        console.log(error);
        next(error)
    }
}
export default create