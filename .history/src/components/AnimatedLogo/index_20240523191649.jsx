import React, { useEffect, useState } from "react";
import "./animatedLogo.css";

const numBalls = 30; // Limite de bolinhas

const AnimatedLogo = () => {
  const [balls, setBalls] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (balls.length < numBalls) {
        setBalls((prevBalls) => [
          ...prevBalls,
          {
            id: prevBalls.length,
            color: `rgb(${Math.random() * 255},${Math.random() * 255},${
              Math.random() * 255
            })`,
            top: `${Math.random() * 160}px`,
            left: `${Math.random() * 160}px`,
          },
        ]);
      }
    }, 100); // Adiciona uma nova bolinha a cada 100ms

    return () => clearInterval(interval);
  }, [balls]); // Adicionamos balls como uma dependência para garantir que o intervalo seja recriado quando balls mudar

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
