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
    <div style={{ position: 'relative', width: '50px', height: '50px' }}>
      <div style={{ position: 'absolute', top: '10%', left: '10%', width: '80%', height: '80%', backgroundColor: 'white', borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', top: '30%', left: '25%', width: '50%', height: '25%', backgroundColor: 'white' }}></div>
      <div style={{ position: 'absolute', top: '40%', left: '20%', width: '20%', height: '15%', backgroundColor: 'white' }}></div>
      <div style={{ position: 'absolute', top: '40%', left: '60%', width: '20%', height: '15%', backgroundColor: 'white' }}></div>
      <div style={{ position: 'absolute', top: '50%', left: '30%', width: '40%', height: '30%', backgroundColor: 'white' }}></div>
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
    </div>
  );
};

export default AnimatedLogo;
