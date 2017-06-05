import React from "react";
import "./LightBox.css";

const LightBox = ( { lightBoxData, showingLightBox, toggleLightBox } ) => (
    <div className={ showingLightBox } id="shadow" >
        <div className="lightBox" id="lightBox">
            <iframe src={ lightBoxData.ytUrl } />
            <div className="details">
                <div className="label">
                    <p className="name">Title:</p>
                    <p className="value">{ lightBoxData.titleOriginal}</p>
                </div>
                <div className="label">
                    <p className="name">Country:</p>
                    <p className="value">{ lightBoxData.country}</p>
                </div>
                <div className="label">
                    <p className="name">Year:</p>
                    <p className="value">{ lightBoxData.year}</p>
                </div>
                <button onClick={ toggleLightBox }>Close Me</button>
            </div>
        </div>
    </div> );

export default LightBox;

/* export default class LightBox extends React.Component {
    handleClose() {
        const shadow = document.getElementById( "shadow" );
        shadow.classList.add( "hidden" );
    }

    hideShadow() {
        const shadow = document.getElementById( "shadow" );
        shadow.classList.add( "hidden" );
    }

    render() {
        return (
            <div className="shadow hidden" id="shadow" onDoubleClick={ this.hideShadow.bind( this ) }>
                <div className="lightBox" id="lightBox">
                    <iframe src={ this.props.lightBoxData.ytUrl } />
                    <div className="details">
                        <div className="label">
                            <p className="name">Title:</p>
                            <p className="value">{this.props.lightBoxData.titleOriginal}</p>
                        </div>
                        <div className="label">
                            <p className="name">Country:</p>
                            <p className="value">{this.props.lightBoxData.country}</p>
                        </div>
                        <div className="label">
                            <p className="name">Year:</p>
                            <p className="value">{this.props.lightBoxData.year}</p>
                        </div>
                        <button onClick={ this.handleClose.bind( this ) }>Close Me</button>
                    </div>
                </div>
            </div> );
    }
}*/
