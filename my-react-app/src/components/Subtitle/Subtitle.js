import React from "react";
import './Subtitle.css'
function Subtitle(props){
    return(
        <div className="title">
            <div className="line1"></div>
            <h2>{props.title}</h2>
            <div className="line2"></div>
        </div>
    )
}

export default Subtitle