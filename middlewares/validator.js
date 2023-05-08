const validator = (schema)=>[
<<<<<<< HEAD
    (req,res,next)=> {
        const validation = schema.validate(req.body,{abortEarly:false})
        if (validation.error){
            return res.status(400).json({
                success:false,
                message:validation.error.details.map(err => err.message)
=======
    (req, res, next)=>{
        const validation = schema.validate(req.body, {abortEarly: false})
        if(validation.error){
            return res.status(400).json({
                success: false,
                message: validation.error.details.map(err => err.message)
>>>>>>> SPRINT-2
            })
        }
        return next()
    }
    
]
export default validator