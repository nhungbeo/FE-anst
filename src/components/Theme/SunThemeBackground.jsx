import React from 'react';
import './sun-theme.css';

const SunThemeBackground = () => {
  return (
    <div className="sun-theme-background">
      {/* Sky with gradient */}
      <div className="sky-gradient"></div>
      
      {/* Clouds */}
      <div className="clouds-container">
        <div className="cloud cloud-1">
          <div className="cloud-part"></div>
          <div className="cloud-part"></div>
          <div className="cloud-part"></div>
        </div>
        <div className="cloud cloud-2">
          <div className="cloud-part"></div>
          <div className="cloud-part"></div>
          <div className="cloud-part"></div>
        </div>
        <div className="cloud cloud-3">
          <div className="cloud-part"></div>
          <div className="cloud-part"></div>
          <div className="cloud-part"></div>
        </div>
      </div>
      
      {/* Sun */}
      <div className="sun">
        <div className="sun-rays"></div>
      </div>
      
      {/* Ocean */}
      <div className="ocean">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>
      
      {/* Ships */}
      <div className="ships-container">
        <div className="ship ship-1">
          <div className="ship-body"></div>
          <div className="ship-mast"></div>
          <div className="ship-sail"></div>
        </div>
        <div className="ship ship-2">
          <div className="ship-body"></div>
          <div className="ship-mast"></div>
          <div className="ship-sail"></div>
        </div>
        <div className="ship ship-3">
          <div className="ship-body"></div>
          <div className="ship-mast"></div>
          <div className="ship-sail"></div>
        </div>
      </div>
    </div>
  );
};

export default SunThemeBackground;