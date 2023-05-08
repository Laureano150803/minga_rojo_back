<<<<<<< HEAD
const errorHandler = (err,req,res,text)=>{
    console.log(err.stack);

    return res
    .status(err.status||500)
    .json({
        statusCode: err.status,
        message:err.message
    })
=======
const errorHandler = (err, req, res, next) =>{
    console.log(err.stack)
    console.log(err);

    return res.status(err.status || 500)
         .json({
            statusCode: err.status,
            message: err.message
         })
>>>>>>> SPRINT-2
}
export default errorHandler