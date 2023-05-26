import Company from "../../models/Company.js";

const update = async(req,res,next)=>{
    try {
        let update = await Company.updateOne(
            {_id:req.params.id},
            req.body
        )
        if (update.modifiedCount) {
            return res.status(200).json({
                success:true,
                message: 'updated',
                update
            })           
        }else{
            return res.status(404).json({
                success:false,
                message: 'not found'
            })
        }      
    } catch (error) {
        next(error)
    }
}
export default update