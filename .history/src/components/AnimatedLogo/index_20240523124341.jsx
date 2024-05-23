import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedLogo = () => {
  const { x } = useSpring({
    from: { x: 0 },
    to: { x: 1 },
    loop: true,
    config: { duration: 1000 },
  });

  return (
    <animated.div
      style={{
        width: '30px',
        height: '30px',
        position: 'relative',
      }}
    >
      <animated.div
        style={{
          position: 'absolute',
          width: '30px',
          height: '30px',
          backgroundColor: 'blue',
          borderRadius: '50%',
          transform: x
            .interpolate({
              range: [0, 0.25, 0.5, 0.75, 1],
              output: [0, 20, 0, -20, 0],
            })
            .interpolate((x) => `translateX(${x}px)`),
        }}
      />
      <animated.div
        style={{
          position: 'absolute',
          top: '10%',
          left: '30%',
          width: '5px',
          height: '5px',
          backgroundColor: 'white',
          borderRadius: '50%',
        }}
      />
      <animated.div
        style={{
          position: 'absolute',
          top: '10%',
          right: '30%',
          width: '5px',
          height: '5px',
          backgroundColor: 'white',
          borderRadius: '50%',
        }}
      />
      <animated.div
        style={{
          position: 'absolute',
          top: '60%',
          left: '50%',
          width: '10px',
          height: '25px',
          backgroundColor: 'white',
          borderRadius: '5px',
          transform: 'translateX(-50%)',
        }}
      />
    </animated.div>
  );
};

export default AnimatedLogo;
