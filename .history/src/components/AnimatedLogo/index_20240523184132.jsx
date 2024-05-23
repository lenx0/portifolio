import React from 'react';
import './animatedLogo.css';

const numBalls = 77;

const AnimatedLogo = () => {
  return (
    <div className="container">
      <div className="ball-container">
        {Array.from({ length: numBalls }).map((_, index) => (
          <div
            key={index}
            className="ball"
            style={{
              backgroundColor: `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`,
              top: `${Math.random() * 160}px`, // Posição vertical aleatória dentro da caixa
              left: `${Math.random() * 160}px`, // Posição horizontal aleatória dentro da caixa
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedLogo;
