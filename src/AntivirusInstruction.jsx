import React from 'react';
import './App.css'; // Ensure this CSS file is linked

const AntivirusInstruction = () => {
  return (
    <div className="antivirus-instruction-container">
      <h3>Instructions for Dealing with Antivirus Blocks</h3>
      <p className="instruction-description">
        In this section, we provide guidance on how to address antivirus software that may block your applications. 
        The following videos offer practical tips and strategies for effectively managing and resolving these issues.
      </p>

      <div className="video-columns">
        <div className="video-item-a">
          <h4>Video 1: For Avast</h4>
          <iframe
            className="video-player"
            src="https://www.youtube.com/embed/J61Mw2Gg0A0?autoplay=1&mute=1"
            title="Video 1: For Avast"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-item-a">
          <h4>Video 2: For Macfee</h4>
          <iframe
            className="video-player"
            src="https://www.youtube.com/embed/J61Mw2Gg0A0?autoplay=1&mute=1"
            title="Video 2: For Macfee"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-item-a">
          <h4>Video 3: For Norton</h4>
          <iframe
            className="video-player"
            src="https://www.youtube.com/embed/J61Mw2Gg0A0?autoplay=1&mute=1"
            title="Video 3: For Norton"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AntivirusInstruction;
