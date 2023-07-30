import React from "react";
import "./Child-container.css"


function ChildContainer(props){
    return(
        <div className="category-container">
                <div className="king">
                <div className="burger">
                    <img src={props.First} className="one two"/>
                </div>
                <div className="offer">
                    <h2 className="h2"> {props.text} </h2>
                    </div>
                </div>
                </div>
    )
}
export default ChildContainer;
