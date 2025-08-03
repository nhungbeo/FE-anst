import React from 'react';
import { useLocation } from 'react-router-dom';

const HeaderDemo = () => {
  const location = useLocation();

  return (
    <div className="study">
      <h2 className="textmeno">🎯 Header Navigation Demo</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <p>Current page: <strong>{location.pathname}</strong></p>
        <p style={{ color: 'var(--color-textSecondary)', fontSize: '14px' }}>
          Test the navigation by clicking on different menu items!
        </p>
      </div>

      <div style={{ 
        padding: '20px', 
        background: 'var(--color-border)', 
        borderRadius: 'var(--border-radius)',
        marginBottom: '20px'
      }}>
        <h3 style={{ color: 'var(--color-primary)', margin: '0 0 15px 0' }}>
          🚀 Header Features
        </h3>
        <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--color-text)' }}>
          <li><strong>🐝 Modern Logo:</strong> Animated bee icon with gradient text</li>
          <li><strong>📱 Responsive Design:</strong> Desktop menu + mobile hamburger</li>
          <li><strong>🎯 Active States:</strong> Highlights current page</li>
          <li><strong>✨ Smooth Animations:</strong> Hover effects and transitions</li>
          <li><strong>🎨 Theme Integration:</strong> Uses CSS variables for theming</li>
          <li><strong>📋 Full Menu:</strong> Study, Status, Analytics, Profile, Themes</li>
        </ul>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '15px',
        marginBottom: '20px'
      }}>
        <div style={{
          padding: '15px',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--border-radius)',
          textAlign: 'center'
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: 'var(--color-primary)' }}>
            🏠 Study Page
          </h4>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-textSecondary)' }}>
            Pomodoro Timer & Task Management
          </p>
        </div>

        <div style={{
          padding: '15px',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--border-radius)',
          textAlign: 'center'
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: 'var(--color-primary)' }}>
            📊 Status Page
          </h4>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-textSecondary)' }}>
            Study Progress & Statistics
          </p>
        </div>

        <div style={{
          padding: '15px',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--border-radius)',
          textAlign: 'center'
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: 'var(--color-primary)' }}>
            📈 Analytics Page
          </h4>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-textSecondary)' }}>
            Performance Charts & Reports
          </p>
        </div>

        <div style={{
          padding: '15px',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--border-radius)',
          textAlign: 'center'
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: 'var(--color-primary)' }}>
            👤 Profile Page
          </h4>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-textSecondary)' }}>
            User Settings & Information
          </p>
        </div>

        <div style={{
          padding: '15px',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--border-radius)',
          textAlign: 'center'
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: 'var(--color-primary)' }}>
            🎨 Themes Page
          </h4>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-textSecondary)' }}>
            Customize App Appearance
          </p>
        </div>
      </div>

      <div style={{
        padding: '20px',
        background: 'var(--color-primary)',
        color: 'white',
        borderRadius: 'var(--border-radius)',
        textAlign: 'center'
      }}>
        <h3 style={{ margin: '0 0 10px 0' }}>
          📱 Mobile Responsive
        </h3>
        <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>
          Try resizing your browser or viewing on mobile to see the hamburger menu!
        </p>
      </div>
    </div>
  );
};

export default HeaderDemo;