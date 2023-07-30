import React from "react";
import logo from '../images/kfc.png';
import './Nav.css';
import bucket from '../images/clipart1044977.png'
import stripes from "../images/Strips.4f336307.svg"
// import { Link } from "react-router-dom";

function Nav(){
return(
<>    
<div className="main-container">

  <div className="nav">
  <nav className="navbar">
      <ul>
        <li><img src={logo} alt="img" className="logo"/></li>
        <li> Menu </li>
        <li> Deals </li>
      </ul>
      </nav>
  </div>
  <div className="nav-two">
    <ul>
      <li> Sign in</li>
      <li>Rs 0</li>
      <li><img src={bucket} alt="img2" className="bucket"/></li>
    </ul>
  </div>
</div>
<div className="black-image">
    <div className="centered-div">
    <h1>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</h1>
    <button className="btn">Start Order</button>
    </div>
</div>
<div className="baap">
<div className="welcome-to-kfc">
    <img src={stripes} alt="stripes"/>
    <h1>Welcome to KFC!</h1>
</div>
</div>
</>
)
}
export default Nav;