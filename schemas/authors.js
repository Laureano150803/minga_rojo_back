import joi from 'joi'
import joi_oid from 'joi-oid'

export const authorCreate = joi.object({
    name: joi.string().min(3).required(),
    last_name:joi.string().required(),
    city:joi.string().required(),
    createdAt:joi.date(). required(),
    photo:joi.string().uri().required()
})