import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const numBalls = 135;

const useStyles = makeStyles((theme) => ({
  glassBox: {
    position: 'relative',
    width: 200,
    height: 200,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Vidro transparente
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', // Sombra para efeito de vidro
    overflow: 'hidden', // Impede que as bolinhas saiam da caixa
  },
  ball: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: '50%',
    animation: '$fall 0.5s linear infinite', // Aplica a animação de queda
  },
  '@keyframes fall': {
    '0%': { transform: 'translateY(-100%)' }, // Começa fora da caixa
    '100%': { transform: 'translateY(1100%)' }, // Termina dentro da caixa
  },
}));

const AnimatedBallsInGlassBox = () => {
  const classes = useStyles();

  return (
    <div className={classes.glassBox}>
      {Array.from({ length: numBalls }).map((_, index) => (
        <Avatar
          key={index}
          className={classes.ball}
          style={{
            backgroundColor: `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`,
            top: `${Math.random() * 180}px`, // Altura aleatória dentro da caixa
            left: `${Math.random() * 180}px`, // Largura aleatória dentro da caixa
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBallsInGlassBox;
