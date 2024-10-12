import React from 'react';
import './App.css';
import logo from './images/test-removebg-preview.png';


const Hero = () => {
  return (
    <section className="hero" id="hero">
      
      <img src={logo} alt="Picstream Logo" className="hero-logo" />
      
   
      <h1>Welcome to Picstream</h1>
      <p>Your ultimate solution for managing and downloading pictures effortlessly,For free PicStream is a powerful tool designed to simplify the process of downloading images in bulk. Whether you're a designer, researcher, or content creator, PicStream allows you to quickly and easily collect related images from the web with just one click.
      Gone are the days of downloading images one by one PicStream streamlines the process, saving you time and effort. With its intuitive interface and robust performance, PicStream ensures that users can gather high-quality images in bulk, making it the ideal solution for anyone in need of large sets of visuals.</p>
      
      <button className="cta-button">Download Now</button>
    </section>
  );
};

export default Hero;
