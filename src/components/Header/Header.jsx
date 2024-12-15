import React from 'react';
import './Header.css';
import siteLogo from '../../assets/Lexcorp (1).png'

function Header() {
  return (
    <header className="header">
      <div className="logo"> 
        
        <img src={siteLogo} alt="Lexcorp Logo" className='img-logo'/>
        
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#packages">Packages</a></li>
          <li><a href="#guarantee">Guarantee</a></li>
          <li><a href="#coverage">Coverage Area</a></li>
          <li><a href="#support">Support</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
