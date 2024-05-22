import { style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';

export const waveformContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const waveformBar = style({
  display: 'inline-block',
  marginRight: rem(3),
  borderRadius: rem(16),
});

export const waveformBarBackground = style({
  backgroundColor: '#4C4C4C',
});

export const waveformBarPrimary = style({
  backgroundColor: theme.colors.primary,
});
