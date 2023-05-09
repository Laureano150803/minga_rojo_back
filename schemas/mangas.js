import joi from 'joi';


export const mangasCreate= joi.object({
  author_id:joi.optional(),

  company_id:joi.optional(),

  cover_photo:joi.optional(),

  title:joi.string()
    .required()
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
  category_id:joi.string()
  .required()
})

