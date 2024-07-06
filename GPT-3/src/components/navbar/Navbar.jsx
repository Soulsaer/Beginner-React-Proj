import React from 'react'
import { useState } from 'react';
// import { RjMenu3Line , RjCloseLin} from 'react-icons/ri';
import logo from  '../../assets/react.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleButton, setTogglebutton] = useState('');
  
  return (
    <>
    <div className='web3_navbar'>
    <div className='web3_navbar-links'>
      <div className='web3_navbar-links_logo'>
        <img src={logo} alt="loding..."/> <h1 className='whiteText'>WEB-3</h1>
      </div>
      <div className='web3_navbar-links_container'>
        <p><a href="#home">Home</a></p>
        <p><a href="#home">What is Web3.0?</a></p>
        <p><a href="#home">Our Team</a></p>
        <p><a href="#home">Contact us</a></p>
        <p><a href="#home">Products</a></p>
      </div>
      <div className='web3_navbar-links_signup'>
        <p><a >Sign Up</a></p>
        <p><a className="active">Log In</a></p>
      </div>
    </div>
    </div>
    </>
  )
}

export default Navbar