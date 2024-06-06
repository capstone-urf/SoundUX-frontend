import { style, keyframes } from '@vanilla-extract/css';

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const spinnerStyle = style({
  display: 'inline-block',
  borderRadius: '50%',
  animation: `${spin} 1.25s ease-in-out infinite`,
});
