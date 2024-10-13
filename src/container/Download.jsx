import React from "react";
import "../App.css";

const Download = () => {
  return (
    <section className="download-section" id="download">
      <h2 className="download-section-title">How to Download</h2>
      <ol className="download-instructions">
        <li>Read the instructions given below before downloading.</li>
        <li>
          Scroll above to download or{" "}
          <a
            href="https://github.com/LockandOpen/PicStream_setup/releases/download/v1.0/PicStream.zip"
            className="download-button"
            download="picStream-setup"
          >
            click here
          </a>
        </li>
      </ol>
    </section>
  );
};

export default Download;
