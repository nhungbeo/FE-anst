import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme, getCurrentTheme } from '../../features/theme/themeSlice';

const ThemeShowcase = () => {
  const dispatch = useDispatch();
  const theme = useSelector(getCurrentTheme);
  const { themes, currentTheme } = useSelector(state => state.theme);

  const handleThemeSelect = (themeName) => {
    dispatch(setTheme(themeName));
  };

  return (
    <div className="study">
      <h2 className="textmeno">🎨 Theme Showcase</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <p>Current theme: <strong>{theme.name}</strong></p>
        <p style={{ color: 'var(--color-textSecondary)', fontSize: '14px' }}>
          Click on any theme below to switch instantly!
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '15px',
        marginBottom: '20px'
      }}>
        {Object.entries(themes).map(([key, themeData]) => (
          <div
            key={key}
            onClick={() => handleThemeSelect(key)}
            style={{
              padding: '15px',
              border: `2px solid ${currentTheme === key ? 'var(--color-primary)' : 'var(--color-border)'}`,
              borderRadius: 'var(--border-radius)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              background: currentTheme === key ? 'var(--color-primary)' : 'var(--color-surface)',
              color: currentTheme === key ? 'white' : 'var(--color-text)',
              transform: currentTheme === key ? 'scale(1.05)' : 'scale(1)',
              boxShadow: currentTheme === key ? 'var(--shadow-lg)' : 'var(--shadow-sm)'
            }}
          >
            <h4 style={{ margin: '0 0 10px 0' }}>
              {getThemeIcon(key)} {themeData.name}
            </h4>
            <div style={{ fontSize: '12px', opacity: 0.8 }}>
              {getThemeDescription(key)}
            </div>
            
            {/* Color preview */}
            <div style={{ 
              display: 'flex', 
              gap: '5px', 
              marginTop: '10px',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: themeData.colors.primary,
                border: '2px solid white',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}></div>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: themeData.colors.secondary,
                border: '2px solid white',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Special showcase for Sun theme */}
      {currentTheme === 'sun' && (
        <div style={{
          padding: '20px',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: 'var(--border-radius)',
          border: '3px solid var(--color-primary)',
          marginTop: '20px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: 'var(--color-primary)', margin: '0 0 15px 0' }}>
            ☀️ Welcome to Sun Theme! ☀️
          </h3>
          <p style={{ margin: '0 0 15px 0', color: 'var(--color-text)' }}>
            Enjoy the beautiful animated background with floating clouds, ocean waves, and sailing ships!
          </p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '20px',
            flexWrap: 'wrap',
            fontSize: '14px',
            color: 'var(--color-textSecondary)'
          }}>
            <span>☁️ Floating Clouds</span>
            <span>🌊 Ocean Waves</span>
            <span>⛵ Sailing Ships</span>
            <span>☀️ Glowing Sun</span>
          </div>
        </div>
      )}
    </div>
  );
};

const getThemeIcon = (themeName) => {
  const icons = {
    light: '☀️',
    dark: '🌙',
    ocean: '🌊',
    forest: '🌲',
    sunset: '🌅',
    sun: '🌞'
  };
  return icons[themeName] || '🎨';
};

const getThemeDescription = (themeName) => {
  const descriptions = {
    light: 'Clean and bright interface',
    dark: 'Easy on the eyes',
    ocean: 'Deep blue serenity',
    forest: 'Natural green vibes',
    sunset: 'Warm evening colors',
    sun: 'Animated sky & ocean scene'
  };
  return descriptions[themeName] || 'Beautiful theme';
};

export default ThemeShowcase;