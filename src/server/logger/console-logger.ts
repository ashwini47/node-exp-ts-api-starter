import express from 'express';

let consoleLogger = (req:any, res:any, next:any) => {
   const fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
    console.log(`Processed ${fullUrl}`);
    next();
  };
  

export default consoleLogger;