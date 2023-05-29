import Chapter from "../models/Chapter.js";

async function orderExists(req,res,next){
    const order_chapter = await Chapter.findOne({order: req.body.order})
    if (order_chapter) {
        return res.status (400).json({
            success: false,
            message: 'The order already exists'
        })
    } 
    return next()
}

export default orderExists