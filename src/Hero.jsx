import React from 'react';
import './App.css';
import logo from './lao.png';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <img src={logo} alt="Picstream Logo" className="hero-section-logo" />
      
     
      <p className="hero-text">We're currently working on the progress...</p>

     
      <a href="https://picstream.lockandopen.in/" className="hero-button">Click here to visit the Picstream application page</a>
    </section>
  );
};

export default Hero;
