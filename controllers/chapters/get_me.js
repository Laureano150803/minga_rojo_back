import passport from "passport";
// import finds_id from '../../middlewares/finds_id'

let get_MeChapters = async(req, res, next)=>{
    
    try{
    passport.authenticate('jwt',{session:false},(err,user,info)=>{

        if (err){
            throw new Error ('Authentication error')
        }

        if (!user){
            throw new Error ('Authentication failed user')
        }

        let mangaId = req.query.manga_id

        if (!mangaId){
            throw new Error ('Not found manga_id');
        }

        res.json({chapters:'chapters manga'});

    }) (req,res);

}  catch (error){
    res.status(500).json({error:error.message})
}
};

export default get_MeChapters