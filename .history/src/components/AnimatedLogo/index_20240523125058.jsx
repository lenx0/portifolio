import React, { useState, useEffect } from 'react';
import { useSprings, animated } from 'react-spring';

const numBalls = 10;

const AnimatedLogo = () => {
  const [springs, set] = useSprings(numBalls, () => ({
    from: {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      color: `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`,
    },
    velocity: {
      x: (Math.random() - 0.5) * 10,
      y: (Math.random() - 0.5) * 10,
    },
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      set((index) => {
        const randomSpeedX = (Math.random() - 0.5) * 10;
        const randomSpeedY = (Math.random() - 0.5) * 10;
        return {
          x: springs[index].x + springs[index].velocity.x + randomSpeedX,
          y: springs[index].y + springs[index].velocity.y + randomSpeedY,
          velocity: { x: randomSpeedX, y: randomSpeedY },
        };
      });
    }, 50);

    return () => clearInterval(interval);
  }, [set, springs]);

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
      {springs.map((props, index) => (
        <animated.div
          key={index}
          style={{
            position: 'absolute',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: props.color,
            transform: props.to((x, y) => `translate(${x}px, ${y}px)`),
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedLogo;
