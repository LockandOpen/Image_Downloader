import React from 'react';
import {  FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import '../App.css';

const Footer = () => {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-info">
        <p>Contact us: <a href="mailto:lockandopenofficial@gmail.com">lockandopenofficial@gmail.com</a></p>
        <p> 
         
          <a href="https://www.linkedin.com/company/lockandopen" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-icon" /> LinkedIn
          </a>
          <a href="https://www.youtube.com/channel/picstream" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="footer-icon" /> YouTube
          </a>
          <a href="https://www.instagram.com/picstream" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="footer-icon" /> Instagram
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
