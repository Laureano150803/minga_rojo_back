import joi from 'joi'

export const companyCreate = joi.object({
    name: joi.string().min(3).required(),
    website:joi.string().uri().required(),
    logo:joi.string().uri().required(),
    description:joi.string().min(5).required()
})