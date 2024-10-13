import React from "react";
import gifImage from '../images/MyVideo-ezgif.com-video-to-gif-converter.gif';
import "../App.css"; 

const InstallationGuide = () => {
  return (
    <section className="installation-guide-section" id="download">
      <h2 className="installation-guide-title">Lock and Open: A Fresh Community</h2>
      <p className="installation-guide-paragraph">
        Currently, as a growing community, we cannot afford a formal coding
        certificate. Because of this, you may face an{" "}
        <strong>"Unrecognized Publisher"</strong> issue or antivirus warnings
        when trying to install our software. But don't worry—our software is
        completely safe! Just follow the instructions below to successfully
        install 'Lock and Open':
      </p>

      <h3 className="installation-guide-subtitle">How to Handle Antivirus Warnings for 'Lock and Open' Software</h3>
      <p className="installation-guide-paragraph">
        We understand that due to the lack of a code signing certificate, you
        may see an <strong>"Unrecognized Publisher"</strong> warning or face
        antivirus blocks when installing our software. Simply follow these steps
        to complete the installation safely:
      </p>

      <h4 className="installation-guide-heading">Watch the Instructions</h4>
        {/* GIF Section */}
        <div className="gif-section">
  <img
    className="tutorial-gif"
    src={gifImage}
    alt="Installation Guide GIF"
  />
</div>
      {/* Grid Container for Three Columns */}
      <div className="installation-guide-grid">
        {/* First Column */}
        <div className="installation-guide-grid-column">
          <h4 className="grid-column-title">Download the Installer</h4>
          <p className="grid-column-description">
            Download the latest version of our software from{" "}
            <a href="#home" className="grid-column-link">Lock and Open Website</a>.
          </p>
        </div>

        {/* Second Column */}
        <div className="installation-guide-grid-column">
          <h4 className="grid-column-title">Handling the Security Warning</h4>
          <p className="grid-column-description">
            If you see a message like "Windows protected your PC", click on
            "More info" and then select "Run anyway." See the visual representation above.
          </p>
        </div>

        {/* Third Column */}
        <div className="installation-guide-grid-column">
          <h4 className="grid-column-title">Dealing with Antivirus Blocks</h4>
          <p className="grid-column-description">
            Your antivirus may block the installer. To allow the Lock and Open installer, open your antivirus, find the quarantine section, and follow the instructions for antivirus other than Windows Defender. <a href="#guide" className="grid-column-link">Click here!</a>
          </p>
        </div>
      </div>

      {/* Content below the grid */}
      <h4 className="installation-guide-heading">Why This Happens ?</h4>
      <p className="installation-guide-paragraph">
        Since we currently cannot afford a formal code signing certificate, some
        systems may flag our software as unrecognized. Rest assured, we are
        actively working towards obtaining a certificate to eliminate these
        warnings in the future.
      </p>

      <p className="installation-guide-paragraph">
        For now, thank you for your patience and understanding!
      </p>
      
    

    </section>
  );
};

export default InstallationGuide;
