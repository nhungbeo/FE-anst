import React, { useEffect, useState } from 'react';

const ParticleEffect = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createParticle = () => {
      const particle = {
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 10,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)` // Blue to purple range
      };
      return particle;
    };

    const interval = setInterval(() => {
      setParticles(prev => {
        const newParticles = prev
          .filter(p => p.y > -10)
          .map(p => ({
            ...p,
            y: p.y - p.speed,
            x: p.x + Math.sin(p.y * 0.01) * 0.5,
            opacity: p.opacity - 0.002
          }));
        
        if (newParticles.length < 20) {
          newParticles.push(createParticle());
        }
        
        return newParticles;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: -1
    }}>
      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            position: 'absolute',
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            borderRadius: '50%',
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            transition: 'all 0.1s linear'
          }}
        />
      ))}
    </div>
  );
};

export default ParticleEffect;