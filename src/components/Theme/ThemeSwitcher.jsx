import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme, setPrimaryColor, toggleTheme, resetToDefault } from '../../features/theme/themeSlice';
import { FiSun, FiMoon, FiSettings, FiDroplet, FiRefreshCw } from 'react-icons/fi';
import './theme.css';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const { currentTheme, themes, primaryColors, isCustomMode, customPrimaryColor } = useSelector(state => state.theme);
  const [showPanel, setShowPanel] = useState(false);
  const [activeTab, setActiveTab] = useState('themes');

  const handleThemeChange = (themeName) => {
    dispatch(setTheme(themeName));
  };

  const handlePrimaryColorChange = (color) => {
    dispatch(setPrimaryColor(color));
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const handleReset = () => {
    dispatch(resetToDefault());
  };

  return (
    <div className="theme-switcher">
      {/* Quick toggle button */}
      <button 
        className="theme-toggle-btn"
        onClick={handleToggleTheme}
        title="Toggle Theme"
      >
        {currentTheme === 'dark' ? <FiSun /> : <FiMoon />}
      </button>

      {/* Settings button */}
      <button 
        className="theme-settings-btn"
        onClick={() => setShowPanel(!showPanel)}
        title="Theme Settings"
      >
        <FiSettings />
      </button>

      {/* Theme panel */}
      {showPanel && (
        <div className="theme-panel">
          <div className="theme-panel-header">
            <h3>Theme Settings</h3>
            <button 
              className="theme-close-btn"
              onClick={() => setShowPanel(false)}
            >
              ×
            </button>
          </div>

          <div className="theme-tabs">
            <button 
              className={`theme-tab ${activeTab === 'themes' ? 'active' : ''}`}
              onClick={() => setActiveTab('themes')}
            >
              <FiDroplet /> Themes
            </button>
            <button 
              className={`theme-tab ${activeTab === 'colors' ? 'active' : ''}`}
              onClick={() => setActiveTab('colors')}
            >
              <FiSettings /> Colors
            </button>
          </div>

          <div className="theme-content">
            {activeTab === 'themes' && (
              <div className="theme-grid">
                {Object.entries(themes).map(([key, theme]) => (
                  <div
                    key={key}
                    className={`theme-card ${currentTheme === key && !isCustomMode ? 'active' : ''}`}
                    onClick={() => handleThemeChange(key)}
                  >
                    <div 
                      className="theme-preview"
                      style={{ background: theme.colors.background }}
                    >
                      <div 
                        className="theme-surface"
                        style={{ 
                          background: theme.colors.surface,
                          color: theme.colors.text 
                        }}
                      >
                        <div 
                          className="theme-accent"
                          style={{ background: theme.colors.primary }}
                        ></div>
                      </div>
                    </div>
                    <span className="theme-name">{theme.name}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'colors' && (
              <div className="color-section">
                <h4>Primary Color</h4>
                <div className="color-grid">
                  {Object.entries(primaryColors).map(([name, color]) => (
                    <button
                      key={name}
                      className={`color-option ${customPrimaryColor === color && isCustomMode ? 'active' : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => handlePrimaryColorChange(color)}
                      title={name}
                    >
                      {customPrimaryColor === color && isCustomMode && '✓'}
                    </button>
                  ))}
                </div>
                
                <div className="custom-color-section">
                  <label htmlFor="custom-color">Custom Color:</label>
                  <input
                    id="custom-color"
                    type="color"
                    value={customPrimaryColor}
                    onChange={(e) => handlePrimaryColorChange(e.target.value)}
                    className="custom-color-input"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="theme-actions">
            <button 
              className="reset-btn"
              onClick={handleReset}
              title="Reset to Default"
            >
              <FiRefreshCw /> Reset
            </button>
          </div>
        </div>
      )}

      {/* Overlay */}
      {showPanel && (
        <div 
          className="theme-overlay"
          onClick={() => setShowPanel(false)}
        ></div>
      )}
    </div>
  );
};

export default ThemeSwitcher;