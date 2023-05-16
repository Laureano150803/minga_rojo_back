import joi from 'joi';
import oid from 'joi-oid'



export const chapterCreate = joi.object({
    manga_id:oid.objectId(),
    title:joi.string().required().max(20).messages({
        "string.empty":"your chapter must have a title",
        "string.max":"Title name too large"
    }),
    order: joi.number().min(1).messages({
        "any.required":"your chapter must have a order"
    }),
    pages:joi.array().items(
        joi.string().uri()).messages({
            'string.uri': 'The field must be a valid URL',
            'string.empty': 'your manga should have pages'
        })
})

