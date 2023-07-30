import React from "react";
import './NavTwoo.css'
import logo from '../images/KFC_Logo.svg'
import location from '../images/Find_KFC.svg'
import play from '../images/google_play.svg'
import apple from '../images/apple.svg'


function NavTwo() {
    return (
        <div className="main-container">
            <div className="beta">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="list">
                    <ul>
                        <li>Legal</li>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Disclaimer</li>
                        <li>Caution Notice</li>
                    </ul>
                    <ul>
                        <li>Kfc India</li>
                        <li>About Kfc</li>
                        <li>Kfc Care</li>
                        <li>Career</li>
                        <li>Our Golden Past</li>
                    </ul>
                    <ul>
                        <li>Kfc Food</li>
                        <li>Menu</li>
                        <li>Order Lookup</li>
                        <li>Gift Card</li>
                        <li>Nutrition & Allergen</li>
                    </ul>
                    <ul>
                        <li>Support</li>
                        <li>Get Help</li>
                        <li>Contact US</li>
                        <li>KFC Feedback</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="loc">
                    <ul>
                        <li> <img src={location} alt=""/></li>
                        <li>Find a Kfc</li>
                    </ul>
                </div>
                <div className="Gpay">
                    <img src={play} alt="" className="play" />
                </div>
                <div className="apple">
                    <img src={apple} alt="" className="apple" />
                </div>
            </div>
            
        </div>
           
    )
}
export default NavTwo;