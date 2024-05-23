import React, { useEffect, useState } from 'react';
import './animatedLogo.css';

const AnimatedLogo = () => {
  const [balls, setBalls] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBalls((prevBalls) => [
        ...prevBalls,
        {
          id: prevBalls.length,
          color: `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`,
          top: `${Math.random() * 160}px`,
          left: `${Math.random() * 160}px`
        }
      ]);
    }, 300); // Adiciona uma nova bolinha a cada 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="ball-container">
        {balls.map((ball) => (
          <div
            key={ball.id}
            className="ball"
            style={{
              backgroundColor: ball.color,
              top: ball.top,
              left: ball.left,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedLogo;
