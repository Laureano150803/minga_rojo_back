import joi from 'joi'


export const authorCreate = joi.object({
    name: joi.string().required(),
    last_name: joi.string().required(),
    city: joi.string().required(),
    createdAt: joi.date().required(),
    photo: joi.string().uri(),
})