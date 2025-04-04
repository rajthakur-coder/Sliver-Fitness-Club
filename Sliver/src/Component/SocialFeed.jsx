import React from "react";
import "./SocialFeed.css"; 
import CaptureAndShare from "./CaptureAndShare";
import sanu from '../images/sanu.jpg';

const SocialFeed = () => {
  return (
    <div className="fac">
      <div className="facebook-feed-container">
        <h2></h2>

        {/* ✅ Image Added */}
        <img 
          src={sanu} 
          alt="Facebook Post" 
          className="feed-image"
        />
        
      </div>
      <CaptureAndShare/>
    </div>
  );
};

export default SocialFeed;
