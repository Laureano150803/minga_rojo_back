const User = /* require */ ('../models/User')
const Company = /* require */ ('../models/Company')

const finds_id = async (req, res, next)=>{

    try{
        const userId = req.user.id;
        const user = await User.findById(userId);
        if (user){
            req.body.author_id= user._id;
            return next();
        }
        const company = await Company.findOne({employees: userId});
        if (company){
            req.doby.company._id=company._id;
            return next();
        }
        return res.status(404).json({error:'user or company not found'});

    } catch (error){
        return res.status(500).json({error: error.mesagge})
    }

}
export default finds_id