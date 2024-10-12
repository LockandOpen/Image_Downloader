import React from "react";
import "./App.css"; 

const InstallationGuide = () => {
  return (
    <section className="installation-guide" id="download">
      <h2>Lock and Open: A Fresh Community</h2>
      <p className="guide-paragraph">
        Currently, as a growing community, we cannot afford a formal coding
        certificate. Because of this, you may face an{" "}
        <strong>"Unrecognized Publisher"</strong> issue or antivirus warnings
        when trying to install our software. But don't worry—our software is
        completely safe! Just follow the instructions below to successfully
        install 'Lock and Open':
      </p>

      <h3>How to Handle Antivirus Warnings for 'Lock and Open' Software</h3>
      <p className="guide-paragraph">
        We understand that due to the lack of a code signing certificate, you
        may see an <strong>"Unrecognized Publisher"</strong> warning or face
        antivirus blocks when installing our software. Simply follow these steps
        to complete the installation safely:
      </p>

      <h4>Watch the GIF Instructions</h4>
      <div className="video-container">
        <iframe
          className="tutorial-gif"
          width="900"
          height="560"
          src="https://program.pinokio.computer/win_install.gif"
          title="YouTube video player"
          frameBorder="0"
          scrolling="no"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Grid Container for Three Columns */}
      <div className="guide-grid">
        {/* First Column */}
        <div className="grid-column">
          <h4>Download the Installer</h4>
          <p>
            Download the latest version of our software from{" "}
            <a href="https://www.google.com">Lock and Open Website</a>.
          </p>
          {/* <img src="./images/1error.gif" alt="Download Installer" className="instruction-gif" /> Update with your GIF path */}
        </div>

        {/* Second Column */}
        <div className="grid-column">
          <h4>Handling the Security Warning</h4>
          <p>
            If you see a message like "Windows protected your PC", click on
            "More info" and then select "Run anyway."
            see the visual representation above.

          </p>
          {/* <img src="./images/1error.gif" alt="Security Warning" className="instruction-gif" /> Update with your GIF path */}
        </div>

        {/* Third Column */}
        <div className="grid-column">
          <h4>Dealing with Antivirus Blocks</h4>
          <p>
          Your antivirus may block the installer. To allow the Lock and Open installer, open your antivirus, find the quarantine section, and follow the instructions for antivirus other than Windows Defender. <a href="https://www.google.com">Click here!</a>
          </p>
          {/* <img src="./images/1error.gif" alt="Antivirus Blocks" className="instruction-gif" /> Update with your GIF path */}
        </div>
      </div>
      {/* Content below the grid */}
      <h4>Why This Happens</h4>
      <p className="guide-paragraph">
        Since we currently cannot afford a formal code signing certificate, some
        systems may flag our software as unrecognized. Rest assured, we are
        actively working towards obtaining a certificate to eliminate these
        warnings in the future.
      </p>

      <p className="guide-paragraph">
        For now, thank you for your patience and understanding!
      </p>
      <h4>PicStream Introduction Video</h4>
      <div className="video-item">
  
  <iframe 
  width="500" 
  height="300" 
  src="https://www.youtube.com/embed/J61Mw2Gg0A0?autoplay=1&mute=1" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen>
</iframe>

</div>
    </section>
  );
};

export default InstallationGuide;
