import createHttpError from "http-errors";

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
