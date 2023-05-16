import Manga from "../../models/Manga.js";

let mangaGet = async (req, res, next) => {
    let queries = {}
    let sort = {}
    let pagination = {
        limit:6,
        page:1
    }
    if( req.query.title){
        queries.title = new RegExp(req.query.title.trim(), 'i') 
    }
    if(req.query.category_id){
        queries.category_id = req.query.category_id.split(',')
    }
    if(req.query.order){
        sort.title = req.query.order
    }
    if(req.query.page){
        pagination.page = req.query.page
    }
    if(req.query.limit){
        pagination.limit = req.query.limit
    }
    console.log(queries)
    try {
        let all = await Manga

            .find(queries)
            .sort(sort)
            .skip(pagination.page > 0 ? (pagination.page-1)*pagination.limit : 0)
            .limit(pagination.limit > 0 ? pagination.limit : 0)
            .populate('category_id')
        let count = await Manga
            .countDocuments(queries)
            let pages = Math.ceil(count / pagination.limit) 
        return res.status(200)
        .json({
            success: true,
            response: all,
            count: pages

        })
    }catch (error) {
        next(error)
    }
}
export default mangaGet