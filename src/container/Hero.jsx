import React from 'react';
import '../App.css';
import logo from '../images/test-removebg-preview.png';
import ReactGA from 'react-ga4';

const Hero = () => {
  const handleDownloadClick = () => {
    // Track button click event
    ReactGA.event({
      category: 'Download',
      action: 'Download button clicked',
      label: 'PicStream Setup Download',
    });
  };

  return (
    <section className="hero-section" id="hero">
      <img src={logo} alt="Picstream Logo" className="hero-section-logo" />

      <h1 className="hero-section-title">Welcome to Picstream</h1>

      <p className="hero-section-description">
        Your ultimate solution for managing and downloading pictures effortlessly, for free.
        PicStream is a powerful tool designed to simplify the process of downloading images in bulk.
        Whether you're a designer, researcher, or content creator, PicStream allows you to quickly
        and easily collect related images from the web with just one click.
        Gone are the days of downloading images one by one. PicStream streamlines the process, saving
        you time and effort. With its intuitive interface and robust performance, PicStream ensures that
        users can gather high-quality images in bulk, making it the ideal solution for anyone in need
        of large sets of visuals.
      </p>

      <a
        href="https://github.com/LockandOpen/PicStream_setup/releases/download/v1.2/PicStream_.zip"
        className="hero-section-cta"
        download="picStream-setup"
        onClick={handleDownloadClick} // Track the download button click
      >
        Download Now
      </a>
    </section>
  );
};

export default Hero;
