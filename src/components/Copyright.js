import React from "react";
import './Copyright.css' ;
import  insta from '../images/insta.svg' ;
import fb from '../images/fb.svg' ;
import Twitter from '../images/Twitter.svg'

function Copyright(){
    return(

<div className="footer"> 
<div className="copyright">
    <h1> Copyright @ KFC Corporation 2021 All Rights Reseved</h1>
    <div className="lu"> 
    <ul>
    <li> <a href="#"><img src={insta} alt=""/></a></li>
    <li> <a href="#"><img src={fb} alt=""/></a></li>
    <li> <a href="#"><img src={Twitter} alt=""/></a></li>
    </ul>
    </div>
    </div>

    

</div>
    )
}
export default Copyright;
