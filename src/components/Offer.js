import React from "react";
import "./Offer.css"
import stripes from "../images/Strips.4f336307.svg"

function Offer(){
    return(
        <>
        <div className="Deals-main-div">
            <div className="deals-div-one">
            <img src={stripes} alt=""/>
            <div className="deals-div-two">
                <h1> OFFERS AND DEALS </h1>
                <h4> View all deals - </h4>
            </div>
            </div>
        </div>
        </>
    )
}
export default Offer;