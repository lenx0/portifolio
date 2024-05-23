import React, { useState } from 'react';
import './animatedLogo.css';

const AnimatedLogo = () => {
  const [balls, setBalls] = useState([]);

  const createBall = () => {
    const newBall = {
      id: balls.length,
      top: Math.random() * 160,
      left: Math.random() * 160
    };
    setBalls((prevBalls) => [...prevBalls, newBall]);
  };

  return (
    <div className="container" onMouseMove={createBall}>
      <div className="ball-container">
        {balls.map((ball) => (
          <div
            key={ball.id}
            className="ball"
            style={{
              top: `${ball.top}px`,
              left: `${ball.left}px`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedLogo;
