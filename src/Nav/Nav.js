import React from "react";
import "./Nav.css";
import SmallTag from "./SmallTag";

/* function Nav () {
    return 1;
}*/

const Nav = ( { watchList, removeFromWatchList } ) => {
    const show = () => {
        const watchListElem = document.getElementById( "watchList" );
        watchListElem.classList.remove( "hidden" );
    };

    const unShow = () => {
        const watchListElem = document.getElementById( "watchList" );
        watchListElem.classList.add( "hidden" );
    };
    const buildWatchList = watchList.map( ( item ) => (
    // movie
        <SmallTag
            watchListElement={ item }
            removeFromWatchList={ removeFromWatchList }
            watchListLength={ watchList.length }
        /> ) );

    return (
        <nav className="navBar">
            <h2>A Movie Thing</h2>
            <button className="show" onClick={ show } >
               WatchList <i className="fa fa-bars" aria-hidden="true" />
            </button>
            <div className="watchList hidden" id="watchList" onMouseLeave={ unShow }>
                { watchList.length === 0 ?
                    <SmallTag watchListElement={ "WatchList is empty, you pleb!" } /> : buildWatchList }
            </div>
        </nav>
    );
};

export default Nav;
/*
export default class Nav extends React.Component {
    show() {
        const watchList = document.getElementById( "watchList" );
        watchList.classList.remove( "hidden" );
    }

    unShow() {
        const watchList = document.getElementById( "watchList" );
        watchList.classList.add( "hidden" );
    }

    render() {
        const watchList = this.props.watchList.map( ( item ) => (
          // movie
            <SmallTag
                watchListElement={ item }
                removeFromWatchList={ this.props.removeFromWatchList }
                watchListLength={ this.props.watchList.length }
            /> ) );
        return (
            <nav className="navBar">
                <h2>A Movie Thing</h2>
                <button className="show" onClick={ this.show.bind( this ) } >WatchList <i className="fa fa-bars" aria-hidden="true" /> </button>
                <div className="watchList hidden" id="watchList" onMouseLeave={ this.unShow.bind( this ) }>
                    { this.props.watchList.length === 0 ? <SmallTag watchListElement={ "WatchList is empty, you pleb!" } /> : watchList }
                </div>
            </nav>
        );
    }
}*/
