import React from "react";
import "../App.css";

const Features = () => {
  return (
    <section className="features-section" id="features">
      <h2 className="features-section-title">Features</h2>
      <div className="features-section-list">
        <div className="features-section-item">
          <h3 className="feature-item-title">Natural Language Processing</h3>
          <p className="feature-item-description">For better image results.</p>
        </div>
        <div className="features-section-item">
          <h3 className="feature-item-title">Easy Downloads</h3>
          <p className="feature-item-description">
            Simple and fast downloading process.
          </p>
        </div>
        <div className="features-section-item">
          <h3 className="feature-item-title">Platform</h3>
          <p className="feature-item-description">Available on Windows.</p>
        </div>
        <div className="features-section-item">
          <h3 className="feature-item-title">User Experience</h3>
          <p className="feature-item-description">Seamless user experience.</p>
        </div>
        <div className="features-section-item">
          <h3 className="feature-item-title">High-Quality Visuals</h3>
          <p className="feature-item-description">
            Gather large sets of high-quality images, perfect for data analysis
            and model training.
          </p>
        </div>

        <div className="features-section-item">
          <h3 className="feature-item-title">Intuitive Interface</h3>
          <p className="feature-item-description">
            Enjoy a clean and user-friendly interface that makes image
            downloading a breeze.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
