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
        position: 'relative',
        width: '30px',
        height: '30px',
      }}
    >
      <animated.div
        style={{
          position: 'absolute',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          backgroundColor: 'blue',
          transform: x.interpolate({
            range: [0, 0.25, 0.5, 0.75, 1],
            output: [0, 20, 0, -20, 0],
          }).interpolate((x) => `translateX(${x}px)`),
        }}
      />
      <animated.div
        style={{
          position: 'absolute',
          top: '10%',
          left: '30%',
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          backgroundColor: 'white',
        }}
      />
      <animated.div
        style={{
          position: 'absolute',
          top: '10%',
          right: '30%',
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          backgroundColor: 'white',
        }}
      />
      <animated.div
        style={{
          position: 'absolute',
          top: '65%',
          left: '50%',
          width: '14px',
          height: '2px',
          backgroundColor: 'white',
          transform: 'translateX(-50%) rotate(-45deg)',
        }}
      />
      <animated.div
        style={{
          position: 'absolute',
          top: '68%',
          left: '50%',
          width: '10px',
          height: '0',
          borderBottom: '2px solid white',
          transform: 'translateX(-50%) rotate(-45deg)',
        }}
      />
      <animated.div
        style={{
          position: 'absolute',
          top: '68%',
          left: '50%',
          width: '10px',
          height: '0',
          borderBottom: '2px solid white',
          transform: 'translateX(-50%) rotate(45deg)',
        }}
      />
    </animated.div>
  );
};

export default AnimatedLogo;
