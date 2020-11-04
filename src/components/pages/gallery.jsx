import React from 'react';
import './gallery.css';

const Gallery = () => {
  return (
    <div className="contents-block">
      
      <div className="asteroid-logo">
        <img src="asteroid_logo.png" alt="Asteroid - logo"></img>
      </div>

      <div className="asteroid-gallery">
        <img src="pedal1.png" alt="Asteroid - angle 1"></img>
        <img src="pedal2.png" alt="Asteroid - angle 2"></img>
        <img src="pedal3.png" alt="Asteroid - angle 3"></img>
      </div>

      <div className="asteroid-logo-icon">
        <img src="asteroid_icon.png" alt="Asteroid - icon"></img>
      </div>
      
    </div>
  )
};

export default Gallery;