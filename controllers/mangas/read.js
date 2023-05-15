import Manga from "../../models/Manga.js"


let read = async (req, res, next) => {
    try {
        let all = await Manga.find()
        return res.status(200).json({
            success: true,
            response: all
        })
    }catch (error) {
        next(error)
    }
}
export default read

