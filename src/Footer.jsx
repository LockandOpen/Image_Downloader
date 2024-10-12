import React from 'react';
import './App.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <p>Contact us: <a href="mailto:lockandopencreater@gmail.com">lockandopencreater@gmail.com</a></p>
        <p>Find us on: 
          <a href="https://github.com/picstream"> GitHub</a>,
          <a href="https://www.linkedin.com/company/picstream"> LinkedIn</a>,
          <a href="https://www.youtube.com/channel/picstream"> YouTube</a>,
          <a href="https://www.instagram.com/picstream"> Instagram</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
