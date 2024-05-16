import { style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';

export const recommendContainer = style({
  width: '100%',
  maxWidth: rem(931),
  marginTop: rem(20),
});

export const recommendTitle = style({
  ...theme.layouts.centerY,
  color: theme.colors.spectrum,
  fontSize: rem(16),
  gap: rem(4),
});
