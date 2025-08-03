import React from 'react';

const LoadingSpinner = ({ size = 40, color = '#4f46e5' }) => {
  const spinnerStyle = {
    width: size,
    height: size,
    border: `4px solid rgba(79, 70, 229, 0.1)`,
    borderLeft: `4px solid ${color}`,
    borderRadius: '50%',
    animation: 'rotate 1s linear infinite',
    margin: '20px auto'
  };

  return (
    <div style={spinnerStyle}></div>
  );
};

export default LoadingSpinner;