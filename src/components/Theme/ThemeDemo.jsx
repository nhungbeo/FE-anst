import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentTheme } from '../../features/theme/themeSlice';

const ThemeDemo = () => {
  const theme = useSelector(getCurrentTheme);

  return (
    <div className="theme-demo" style={{ padding: '20px', margin: '20px 0' }}>
      <div className="study">
        <h2 className="textmeno">Theme Demo</h2>
        <p>Current theme: <strong>{theme.name}</strong></p>
        
        <div style={{ marginTop: '20px' }}>
          <input 
            className="inputAddTask" 
            placeholder="Test input with theme colors..."
            style={{ marginBottom: '15px' }}
          />
          
          <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
            <button className="display--button">Primary Button</button>
            <button className="display--button active">Active Button</button>
          </div>
          
          <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
            <button className="btnSave">Save Button</button>
            <button className="btnSimple">Simple Button</button>
          </div>
          
          <div className="marginTop"></div>
          
          <div style={{ 
            padding: '15px', 
            background: 'var(--color-surface)', 
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--border-radius)',
            marginTop: '15px'
          }}>
            <h4 style={{ color: 'var(--color-primary)', margin: '0 0 10px 0' }}>
              Theme Colors Preview
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '10px' }}>
              <div style={{ 
                padding: '10px', 
                background: 'var(--color-primary)', 
                color: 'white', 
                borderRadius: 'var(--border-radius-sm)',
                textAlign: 'center',
                fontSize: '12px'
              }}>
                Primary
              </div>
              <div style={{ 
                padding: '10px', 
                background: 'var(--color-secondary)', 
                color: 'white', 
                borderRadius: 'var(--border-radius-sm)',
                textAlign: 'center',
                fontSize: '12px'
              }}>
                Secondary
              </div>
              <div style={{ 
                padding: '10px', 
                background: 'var(--color-success)', 
                color: 'white', 
                borderRadius: 'var(--border-radius-sm)',
                textAlign: 'center',
                fontSize: '12px'
              }}>
                Success
              </div>
              <div style={{ 
                padding: '10px', 
                background: 'var(--color-warning)', 
                color: 'white', 
                borderRadius: 'var(--border-radius-sm)',
                textAlign: 'center',
                fontSize: '12px'
              }}>
                Warning
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeDemo;