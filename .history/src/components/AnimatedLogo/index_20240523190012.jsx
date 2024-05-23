import React, { useEffect, useState } from 'react';
import './animatedLogo.css';

const AnimatedLogo = () => {
  const [balls, setBalls] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setBalls((prevBalls) => [
        ...prevBalls,
        {
          id: prevBalls.length,
          color: `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`,
          top: Math.random() * 160,
          left: Math.random() * 160
        }
      ]);
    }, 500); // Adiciona uma nova bolinha a cada 500ms

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (event) => {
    const container = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - container.left,
      y: event.clientY - container.top
    });
  };

  const calculateNewPosition = (ball) => {
    const dx = ball.left - mousePosition.x;
    const dy = ball.top - mousePosition.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 50; // Distância mínima para afastamento

    if (distance < maxDistance) {
      const moveFactor = 5; // Fator de movimento para afastar rapidamente
      const newLeft = ball.left + dx * moveFactor;
      const newTop = ball.top + dy * moveFactor;

      return {
        left: newLeft,
        top: newTop
      };
    }

    return {
      left: ball.left,
      top: ball.top
    };
  };

  return (
    <div className="container" onMouseMove={handleMouseMove}>
      <div className="ball-container">
        {balls.map((ball) => {
          const newPosition = calculateNewPosition(ball);
          return (
            <div
              key={ball.id}
              className="ball"
              style={{
                backgroundColor: ball.color,
                left: `${newPosition.left}px`,
                top: `${newPosition.top}px`,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedLogo;
