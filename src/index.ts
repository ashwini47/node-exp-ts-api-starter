import express from "express";
import path from "path"

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ message: "API HOME" ,localTime:(new Date().toLocaleString())}) );
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log( `Request Processed URL ${ fullUrl }` ) ;
} );    
app.get( "/customers", ( req, res ) => {
    res.setHeader('Content-Type', 'application/json');
    res.send( "Customers API" );
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log( `Request Processed URL ${ fullUrl }` ) ;
} );

// start the Express server
app.listen( port, () => {
    console.log( `server starti  ng at http://localhost:${ port }` ) ;


} );