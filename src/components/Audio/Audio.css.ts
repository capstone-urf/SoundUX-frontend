import { style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';

export const waveformContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const waveformBar = style({
  display: 'inline-block',
  marginRight: rem(2),
  borderRadius: rem(16),
  backgroundColor: theme.colors.gray,
});

export const waveformBarActive = style({
  backgroundColor: theme.colors.primary,
});
