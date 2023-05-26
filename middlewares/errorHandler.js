const errorHandler = (error,req,res,next)=>{
    

    return res
    .status(error.status || 500)
    .json({
        statusCode: error.status,
        message: error.message
    })
}
export default errorHandler