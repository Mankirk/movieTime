import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MovieList from "./MovieList/MovieList";

ReactDOM.render( <MovieList />, document.getElementById( "root" ) );

/* setInterval( () => {
    console.log( `document scrolled ${ window.scrollY }` );
}, 500 );*/

/* const scrollManager = () => {
    console.log( "scrolling body" );
};*/

/* window.onscroll = () => {
    console.log( "scrolling window" );
};*/
