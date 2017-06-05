import React from "react";
import "./MovieList.css";
import Movie from "../Movie/Movie";
import LightBox from "../lightBox/LightBox";
import Nav from "../Nav/Nav";

export default class MovieList extends React.Component {
    constructor ( props ) {
        super( props );
        this.state = {
            movies: [ ],
            lightBoxData: [],
            showingLightBox: "hidden",
            showingWatchList: false,
            nrOfPages: 0,

        };
        this.changelightBoxData = this.changelightBoxData.bind( this );
        this.addToWatchList = this.addToWatchList.bind( this );
        this.removeFromWatchList = this.removeFromWatchList.bind( this );
        this.buildMovie = this.buildMovie.bind( this );
        this.toggleLightBox = this.toggleLightBox.bind( this );
        this.handleScroll = this.handleScroll.bind( this );
    }

    componentDidMount( ) {
        this.fetchMovies( 1 ); // fetchmovies

        window.addEventListener( "scroll", this.handleScroll );
    }

    handleScroll() {
        const docHeight = document.documentElement.scrollHeight;
        if ( ( window.innerHeight + window.scrollY === docHeight ) && !( this.state.nrOfPages >= 10 ) ) {
            this.fetchMovies( this.state.nrOfPages + 1 );
        }
    }

    fetchMovies( page ) {
        fetch( "/getMovies", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json" },
            body: JSON.stringify( { wantedPage: page } ),
        } )
      .then( ( response ) => response.json() )
      .then( ( movies ) => {
          const newMovieList = parseMovies( movies );

          this.setState( {
              movies: [ ...this.state.movies, ...newMovieList ],
              nrOfPages: this.state.nrOfPages + 1 } );
      } );
    }

    changelightBoxData ( newmovie ) {
        this.setState( { lightBoxData: newmovie } );
    }

    toggleLightBox ( ) {
        if ( this.state.showingLightBox === "hidden" ) {
            this.setState( { showingLightBox: "notHidden" } );
        } else {
            this.setState( { showingLightBox: "hidden" } );
        }
    }

    addToWatchList ( movieToAdd ) {
        const movies = [ ...this.state.movies ];
        movies.forEach( ( movie ) => {
            if ( movieToAdd.id === movie.id ) {
                Object.assign( movie, { inWatchList: true } );
            }
        } );

        this.setState( { movies } );
    }

    removeFromWatchList ( IdOfRemovedMovie ) {
        const movies = [ ...this.state.movies ];

        movies.forEach( ( movie ) => {
            if ( movie.id === IdOfRemovedMovie ) {
                Object.assign( movie, { inWatchList: false } );
            }
        } );
        this.setState( { movies } );
    }

    buildMovie( item, index ) {
        return (
            <Movie
                movieData={ item }
                index={ index }
                changeLightBoxData={ this.changelightBoxData }
                addToWatchList={ this.addToWatchList }
                removeFromWatchList={ this.removeFromWatchList }
                toggleLightBox={ this.toggleLightBox }
            /> );
    }

    render() {
        const watchList = this.state.movies.filter( ( movie ) => movie.inWatchList );
        const movieList = this.state.movies.map( this.buildMovie );
        return ( <div className="movieList">
            <Nav watchList={ watchList } removeFromWatchList={ this.removeFromWatchList } />

            <LightBox
                lightBoxData={ this.state.lightBoxData }
                showingLightBox={ this.state.showingLightBox }
                toggleLightBox={ this.toggleLightBox }
            />
            { movieList }
        </div> );
    }
}

const parseMovies = ( movies ) => {
    movies.forEach( ( movie ) => {
        removeTitleParanthesis( movie );
        addWatchListProperty( movie );
    } );
    return movies;
};

const addWatchListProperty = ( movie ) => {
    Object.assign( movie, { inWatchList: false } );
};

const removeTitleParanthesis = ( movie ) => {
    const titleOriginal = movie.titleOriginal.slice( 1, movie.titleOriginal.length - 2 );
    Object.assign( movie, { titleOriginal } );
};
