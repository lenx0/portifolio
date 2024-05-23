import React from 'react';
import './AnimatedBouncingBalls.css';

const numBalls = 10;

const AnimatedLogo = () => {
  return (
    <div className="glass-box">
      <div className="ball-container">
        {Array.from({ length: numBalls }).map((_, index) => (
          <div
            key={index}
            className="ball"
            style={{
              backgroundColor: `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`,
              left: `${Math.random() * 180}px`, // Posição horizontal aleatória dentro da caixa
              animationDelay: `${Math.random()}s`, // Atraso aleatório para cada bolinha
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedLogo;
