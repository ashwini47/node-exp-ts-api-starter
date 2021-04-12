import {Joi} from 'express-validation'
// schemas.js 

 export const payloadSchemas = { 
  TaskSchema: Joi.object({ 
    user: Joi.string().required(),
    description: Joi.string().required(),
    done: Joi.boolean().required() 
  })
  // define all the other schemas below 
}; 
//module.exports = schemas;