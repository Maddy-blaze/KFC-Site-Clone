import React from 'react';
import Burger from "./components/Burger"
import './App.css'
import './components/Burger.css'
import Nav from './components/Nav';
import NavTwo from './components/NavTwo';
import One from './images/KFC-IMG1.jpg'
import Two from './images/KFC-img2.jpg'
import Three from './images/kfc-img3.jpg'
import Four from './images/kfc-img4.jpg'
import Five from './images/kfc-img5.jpg'
import six from './images/kfc-img6.jpg'
import seven from './images/kfc-img7.jpg'
import eight from './images/kfc-img8.svg'
import ChildContainer from './components/Child-container';
import Offer from "./components/Offer"
import Copyright from './components/Copyright'
import {Route,Routes,BrowserRouter as Router} from "react-router-dom"
function App() {
  return (
    <>
    <Nav/>
       <Burger/>
      <div className='parent-container'>
      <div className='child-container'> 
      <ChildContainer First={One} text="LEG PIECE BUCKET OFFER"/>
      <ChildContainer First={Two} text="PERI PERI SPECIALS"/>
      <ChildContainer First={Three} text="CHICKEN ROLLS"/>
      <ChildContainer First={Four} text="CHICKEN BUCKETS"/>
      </div>
      <div className='child-container'>
      <ChildContainer First={Five} text="BIRYANI BUCKETS"/>
      <ChildContainer First={six}  text="BOX MEALS"/>
      <ChildContainer First={seven} text="BURGERS"/>
      <ChildContainer First={eight} text="View All Menu --> " />
      </div>
      </div>
      <Offer/>
      <div className='child-containertwo'> 
      <ChildContainer First={One} text="first"/>
      <ChildContainer First={Two} text="Second"/>
      <ChildContainer First={Three} text="third"/>
      </div>
      <NavTwo/>
      <Copyright/>

    </>
  );
}
export default App;
