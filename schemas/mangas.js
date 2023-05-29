import joi from 'joi';


export const mangasCreate= joi.object({
  title:joi.string()
    .required()
    .min(3)
    .max(15)
    .messages({ 
      "string.empty": "title is not allowed to be empty"
  }),
  description:joi.string()
    .required()
    .min(10)
    .max(75)
    .messages({ 
      "string.min":"order length must be at least 10 characters long",
      "string.empty": "description is not allowed to be empty"
  }),
  category_id:joi.string().required(),
  cover_photo:joi.string().uri()
})

export const mangasUpdate = joi.object({
  title: joi.string().min(4).max(30).message({
    "string.min": "the title must be at least 4 characteres",
    "string.max": "the title must not have more than 30 characters",
    "string.required": "the title is required"
}),
description: joi.string().min(10).message({
  "any.required": "Description is a required field.",
  "string.empty": "Description cannot  be an empty field and need 10 leters."
}),cover_photo:joi.string().uri().required(),
  category_id: joi.any().optional()
  
})

