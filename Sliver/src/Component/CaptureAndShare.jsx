import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import WorkoutProgress from "./WorkoutProgress";
import "./CaptureAndShare.css";

const CaptureAndShare = () => {
  const captureRef = useRef();
  const [imageURL, setImageURL] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  const captureScreenshot = async () => {
    const canvas = await html2canvas(captureRef.current);
    const imgData = canvas.toDataURL("image/png");
    setImageURL(imgData);

    // Copy image to clipboard
    canvas.toBlob((blob) => {
      if (blob) {
        navigator.clipboard.write([
          new ClipboardItem({ "image/png": blob }),
        ]);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      }
    });
  };

  return (
    <div className="capture-container">
      {/* Screenshot Area */}
      <div ref={captureRef}>
        <WorkoutProgress onCapture={captureScreenshot} />
      </div>

      {/* Screenshot Actions */}
      {imageURL && (
        <div className="share-section">
          <h3>🎯 Share Your Progress</h3>

          {/* Copy to Clipboard */}
          <button onClick={captureScreenshot} className="custom-share-btn">
            📸 Capture Screenshot
          </button>

          {copySuccess && <p className="success-msg">✅ Copied! Paste it anywhere.</p>}

          {/* Download Button */}
          <a href={imageURL} download="workout-progress.png" className="custom-share-btn">
            ⬇ Download
          </a>
        </div>
      )}
    </div>
  );
};

export default CaptureAndShare;
