import React, { useState } from 'react';
import './DemoVideo.css';

const DemoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    // In a real implementation, you would use a ref to access and play the video element
  };

  return (
    <section className="demo-video-section" id="demo">
      <div className="container">
        <h2 className="section-title">See How It Works</h2>
        <div className="video-container">
          {!isPlaying ? (
            <div className="video-placeholder">
              <div className="play-button" onClick={handlePlayVideo}>
                <i className="fas fa-play"></i>
              </div>
              <img 
                src="/public/Screen Recording 2025-01-10 185445.mp4" 
                alt="ScanEat Demo Video Thumbnail" 
                className="video-thumbnail" 
              />
              <div className="video-info">
                <h3>Contactless Ordering Demo</h3>
                <p>Watch how easy it is to scan, order and pay</p>
              </div>
            </div>
          ) : (
            <div className="video-player">
              {/* In a real implementation, this would be replaced with an actual video element */}
              <div className="video-simulation">
                <div className="loading-spinner">
                  <i className="fas fa-circle-notch fa-spin"></i>
                </div>
                <p className="video-message">Demo video would play here</p>
                <p className="video-note">In production, this would be replaced with an actual video player</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="demo-features">
          <div className="demo-feature">
            <div className="feature-icon">
              <i className="fas fa-qrcode"></i>
            </div>
            <h3>Scan QR Code</h3>
            <p>Customers scan the QR code on their table</p>
          </div>
          
          <div className="demo-feature">
            <div className="feature-icon">
              <i className="fas fa-utensils"></i>
            </div>
            <h3>Browse Menu</h3>
            <p>Browse digital menu with images and descriptions</p>
          </div>
          
          <div className="demo-feature">
            <div className="feature-icon">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <h3>Place Order</h3>
            <p>Select items and send order directly to kitchen</p>
          </div>
          
          <div className="demo-feature">
            <div className="feature-icon">
              <i className="fas fa-credit-card"></i>
            </div>
            <h3>Pay Digitally</h3>
            <p>Pay using digital wallets or card payments</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;