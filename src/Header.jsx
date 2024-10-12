import React from 'react';
import './App.css';
import logo from './images/1-removebg-preview.png'; 

const Header = () => {
  return (
    <header className="header">
     
      <div className="logo-container" id="home">
        <img src={logo} alt="Picstream Logo" className="header-logo" />
        <div className="logo-text">Picstream</div>
      </div>
      
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#download">How to Download</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
