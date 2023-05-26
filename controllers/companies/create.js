import Company from "../../models/Company.js"

let create =async(req, res, next)=>{
    try {
        req.body.active = false;
        console.log(req.body)
        let one = await new Company(req.body)
        await one.save()
        return res.status (201).json({
            chapter:one, 
            success:true,
            timestamps:one.createdAt
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}
export default create