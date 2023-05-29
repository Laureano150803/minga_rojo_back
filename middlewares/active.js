const Author = require('../models/Author')
const Publish = requiere('../models/Pusblish')

async function active(req,res,next){
    const userId =req.user._id;
    try {
        const author = await Author.findOne({user:userId});

        if(author && author.active){
            return next();
        }
        const publish = await Publish.finderOne({user: userId});

        if (publish && publish.active){
            return next();
        }
        throw new Error('Authot o edit not found')
    } catch(err){
        res.status(401).json({message})
    }
}
export default active 