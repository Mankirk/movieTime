import React from "react";
import "./SmallTag.css";

const SmallTag = ( { watchListElement, removeFromWatchList, watchListLength } ) => {
    const handleDrop = () => {
        console.log( "dropping" );
        removeFromWatchList( watchListElement.id );
    };

    if ( !watchListElement.hasOwnProperty( "titleOriginal" ) ) {
        return (
            <div className="singTag">
                <p>WatchList is empty, you pleb!</p>
            </div>
        );
    }
    const linkMod = watchListElement.ytUrl.split( "/" );
    const extracted = linkMod[ 4 ];
    return ( <div className="singTag">
        <p>{ watchListElement.titleOriginal }</p>
        <img src={ `http://img.youtube.com/vi/${ extracted }/hqdefault.jpg` } />
        <button onClick={ handleDrop }>Drop</button>
    </div> );
};

export default SmallTag;

/* export default class SmallTag extends React.Component {
    handleDrop() {
        this.props.removeFromWatchList( this.props.watchListElement.id );
    }

    render() {
        if ( !this.props.watchListElement.hasOwnProperty( "titleOriginal" ) ) {
            return (
                <div className="singTag">
                    <p>WatchList is empty, you pleb!</p>
                </div>
            );
        }
        const linkMod = this.props.watchListElement.ytUrl.split( "/" );
        const extracted = linkMod[ 4 ];
        return ( <div className="singTag">
            <p>{this.props.watchListElement.titleOriginal}</p>
            <img src={ `http://img.youtube.com/vi/${ extracted }/hqdefault.jpg` } />
            <button onClick={ this.handleDrop.bind( this ) }>Drop</button>
        </div> );
    }
}*/
