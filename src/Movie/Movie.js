import React from "react";
import "./Movie.css";

const Movie = ( { movieData, index, changeLightBoxData, addToWatchList, removeFromWatchList, toggleLightBox } ) => {
    const getLightBox = () => {
        changeLightBoxData( movieData );
        toggleLightBox();
    };

    const handleAdd = () => {
        addToWatchList( movieData );
    };

    const handleRemove = () => {
        removeFromWatchList( movieData.id );
    };
    const linkMod = movieData.ytUrl.split( "/" );
    const extracted = linkMod[ 4 ];
    return ( <div className="movie">
        <img src={ `http://img.youtube.com/vi/${ extracted }/hqdefault.jpg` } alt="thumbnail" />
        <div className="details">
            <div className="label">
                <p className="name" >Title:</p>
                <p className="value" >{ movieData.titleOriginal }</p>
            </div>
            <div className="label">
                <p className="name" >Country:</p>
                <p className="value" >{ movieData.country}</p>
            </div>
            <div className="label">
                <p className="name" >Year:</p>
                <p className="value" >{ movieData.year}</p>
            </div>
        </div>
        <div className="buttons">
            <button
                className="add-Rm"
                onClick={
               movieData.inWatchList ?
               handleRemove : handleAdd }
            >
                { movieData.inWatchList ? "Remove From WatchList" : "Add To Watchlist" }
            </button>
            <button className="getDetails" onClick={ getLightBox }>See Details</button>
        </div>
    </div> );
};

export default Movie;

/* export default class Movie extends React.Component {
    getLightBox() {
        const shadow = document.getElementById( "shadow" );
        shadow.classList.remove( "hidden" );
        this.props.changeLightBoxData( this.props.movieData );
    }

    handleAdd() {
        this.props.addToWatchList( this.props.movieData );
    }

    handleRemove() {
        this.props.removeFromWatchList( this.props.movieData.id );
    }

    render() {
        const linkMod = this.props.movieData.ytUrl.split( "/" );
        const extracted = linkMod[ 4 ];
        return ( <div className="movie">
            <img src={ `http://img.youtube.com/vi/${ extracted }/hqdefault.jpg` } alt="thumbnail" />
            <div className="details">
                <div className="label">
                    <p className="name" >Title:</p>
                    <p className="value" >{ this.props.movieData.titleOriginal }</p>
                </div>
                <div className="label">
                    <p className="name" >Country:</p>
                    <p className="value" >{this.props.movieData.country}</p>
                </div>
                <div className="label">
                    <p className="name" >Year:</p>
                    <p className="value" >{this.props.movieData.year}</p>
                </div>
            </div>
            <div className="buttons">
                <button
                    className="add-Rm"
                    onClick={
                     this.props.movieData.inWatchList ?
                     this.handleRemove.bind( this ) : this.handleAdd.bind( this )
                }
                >
                    { this.props.movieData.inWatchList ? "Remove From WatchList" : "Add To Watchlist" }
                </button>
                <button className="getDetails" onClick={ this.getLightBox.bind( this ) }>See Details</button>
            </div>
        </div> );
    }
}*/
