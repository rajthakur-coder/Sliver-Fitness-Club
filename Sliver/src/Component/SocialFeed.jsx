import React from "react";
import "./SocialFeed.css"; 
import CaptureAndShare from "./CaptureAndShare";
import sanu from '../images/sanu.jpg';

const SocialFeed = () => {
  return (
    <>
    <h1 className="head"> Workout Progress check</h1>
    <div className="social">
     
      <div className="facebook-feed-container">
       

        {/* ✅ Image Added */}
        <img 
          src={sanu} 
          alt="Facebook Post" 
          className="feed-image"
        />
        
      </div>
      <CaptureAndShare/>
    </div>
    </>
  );
};

export default SocialFeed;
