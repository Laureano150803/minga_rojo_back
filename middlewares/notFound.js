import createHttpError from "http-errors";

<<<<<<< HEAD
const notFound = (req,res,next)=>{
  next(createHttpError(404,`La ruta no existe`))
}

export default notFound
=======
const notFound = (req, res, next)=>{
<<<<<<< HEAD
    next(createHttpError(404,'La ruta no existe'))
}

export default notFound;
=======
    next(createHttpError(404, 'La ruta no existe'))
}
export default notFound
>>>>>>> SPRINT-2
>>>>>>> 44351fb7bb2ec1c7a54f60f9860cddb613427a07
