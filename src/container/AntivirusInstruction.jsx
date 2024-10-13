import React from 'react';
import '../App.css'; // Ensure this CSS file is linked

const AntivirusInstruction = () => {
  return (
    <div className="instruction-section-responsive" id="guide">
      <h3 className="responsive-header">Instructions for Dealing with Antivirus Blocks</h3>
      <p className="responsive-text">
        In this section, we provide guidance on how to address antivirus software that may block your applications. 
        The following videos offer practical tips and strategies for effectively managing and resolving these issues.
      </p>

      <div className="video-grid-responsive">
        <div className="video-item-responsive">
          <h4 className="responsive-video-title">For Avast</h4>
          <div className="responsive-video-wrapper">
            <iframe
              className="responsive-video-embed"
              src="https://www.youtube.com/embed/a_1eEyfuwvs?autoplay=1&mute=1&loop=1&playlist=a_1eEyfuwvs" 
              title="Video 1: For Avast"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="video-item-responsive">
          <h4 className="responsive-video-title">For McAfee</h4>
          <div className="responsive-video-wrapper">
            <iframe
              className="responsive-video-embed"
              src="https://www.youtube.com/embed/j2q9cDWH09M?autoplay=1&mute=1&loop=1&playlist=j2q9cDWH09M" 
              title="Video 2: For McAfee"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="video-item-responsive">
          <h4 className="responsive-video-title">For Norton</h4>
          <div className="responsive-video-wrapper">
            <iframe
              className="responsive-video-embed"
              src="https://www.youtube.com/embed/gTelqDwCf_A?autoplay=1&mute=1&loop=1&playlist=gTelqDwCf_A" 
              title="Video 3: For Norton"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntivirusInstruction;
