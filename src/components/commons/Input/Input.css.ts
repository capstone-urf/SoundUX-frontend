import { style } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/styles.css';

export const inputContainer = style({
  position: 'relative',
  width: '100%',
  marginTop: rem(48),
  paddingLeft: rem(60),
  border: `${rem(1)} solid ${theme.colors.border}`,
  borderRadius: rem(16),
  backgroundColor: 'rgba(16, 16, 16, 0.48)',
  backdropFilter: `blur(${rem(6)})`,
  boxShadow: `0 ${rem(4)} ${rem(8)} rgba(0, 0, 0, 0.05)`,
});

export const input = style({
  width: '100%',
  maxWidth: rem(931),
  paddingBlock: rem(30),
  paddingRight: rem(30),
  color: theme.colors.white,
  fontSize: rem(18),
});

export const inputIcon = style({
  ...theme.layouts.centerY,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  left: rem(30),
});
