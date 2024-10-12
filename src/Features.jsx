import React from 'react';
import './App.css';

const Features = () => {
  return (
    <section className="features" id="features">
      <h2>Features</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h3>Natural Lanugage Process</h3>
          <p>For better image resutls.</p>
        </div>
        <div className="feature-item">
          <h3>Easy Downloads</h3>
          <p>Simple and fast downloading process.</p>
        </div>
        <div className="feature-item">
          <h3>Platform</h3>
          <p>Available on Windows.</p>
        </div>

        <div className="feature-item">
          <h3>User Experience</h3>
          <p>Seamless user Experience.</p>
        </div>
        
      </div>
    </section>
  );
};

export default Features;
