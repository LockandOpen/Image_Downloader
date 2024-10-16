import React from "react";
import "../App.css";

const Download = () => {
  const handleDownloadClick = () => {
    window.gtag('event', 'download_click', {
      event_category: 'Download',
      event_label: 'PicStream Download', // Customize this label as needed
      transport_type: 'beacon',
    });
  };

  return (
    <section className="download-section" id="download">
      <h2 className="download-section-title">How to Download</h2>
      <ol className="download-instructions">
        <li>Read the instructions given below before downloading.</li>
        <li>
        To download PicStream{" "}
          <a
            href="https://github.com/LockandOpen/PicStream_setup/releases/download/v1.2/PicStream_1.0.zip"
            className="download-button"
            download="picStream-setup"
            onClick={handleDownloadClick} // Attach the click handler
          >
            click here
          </a>
        </li>
      </ol>
    </section>
  );
};

export default Download;
