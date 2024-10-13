import React from 'react';
import '../App.css'; // Link to your stylesheet

const Intro = () => {
  return (
    <section className="intro-video-section">
      <div className="intro-video-container">
        <h2 className="intro-video-title">Watch the Introduction to Picstream</h2>
        <iframe
          className="intro-video-frame"
          src="https://www.youtube.com/embed/emgE56GYZfc?autoplay=1&mute=1"
          title="Intro Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Intro;
