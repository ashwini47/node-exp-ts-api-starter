const Joi = require('joi');

 //https://softchris.github.io/pages/joi.html#building-a-middleware
 //https://medium.com/@xoor/building-a-node-js-rest-api-7-request-validation-43c144300d06

export  const payloadValidator = (schema) => { 
 
  return (req, res, next) => { 
  const { error } = schema.validate(req.body); 
  const valid = error == null; 
  
  if (valid) { 
    next(); 
  } else { 
    const { details } = error; 
    const message = details.map(i => i.message).join(',');
 
    console.log("error", message); 
   res.status(422).json({ error: message }) } 
  } 
} 
//module.exports = middleware;