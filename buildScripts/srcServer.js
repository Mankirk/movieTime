import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import bodyParser from "body-parser";
import config from "../webpack.config.dev";
import data from "./tiff2017.json";

/* eslint-disable no-console */
const port = 3000;
const app = express();
const compiler = webpack( config );

app.use( require( "webpack-dev-middleware" )( compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
} ) );

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );

app.get( "/", ( req, res ) => {
    res.sendFile( path.join( __dirname, "../src/index.html" ) );
} );

app.get( "/users", ( req, res ) => {
    res.json( {
        users: [ { id: 1, name: "bob" }, { id: 2, name: "tammy" } ],
    } );
} );

app.post( "/getMovies", ( req, res ) => {
    const chunk = [];
    const scope = req.body.wantedPage;
    for ( let i = ( scope - 1 ) * 10; i < scope * 10; i += 1 ) {
        chunk.push( data[ i ] );
    }
    console.log( req.body.wantedPage );
    res.json( chunk );
} );

app.listen( port, ( err ) => {
    if ( err ) {
        console.log( err );
    } else {
        open( `http://localhost:${ port }` );
    }
} );
