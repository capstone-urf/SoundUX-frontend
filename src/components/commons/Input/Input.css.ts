import { style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';

export const inputContainer = style({
  position: 'relative',
  width: '100%',
  maxWidth: rem(931),
  paddingLeft: rem(60),
  border: `${rem(1)} solid ${theme.colors.border}`,
  borderRadius: rem(16),
  backgroundColor: 'rgba(16, 16, 16, 0.48)',
  backdropFilter: `blur(${rem(6)})`,
  boxShadow: `0 ${rem(4)} ${rem(8)} rgba(0, 0, 0, 0.05)`,
});

export const input = style({
  width: '100%',
  paddingRight: rem(30),
  color: theme.colors.white,
  fontSize: rem(18),

  '::placeholder': {
    color: 'transparent',
  },
});

export const inputIcon = style({
  ...theme.layouts.centerY,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
});

export const placeholderWrapper = style({
  ...theme.layouts.centerY,
  position: 'absolute',
  height: '100%',
  width: '100%',
  maxWidth: rem(931),
  top: '50%',
  left: 0,
  paddingLeft: rem(60),
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
  overflowX: 'hidden',
});

export const placeholder = style({
  position: 'absolute',
  width: '100%',
  color: theme.colors.placeholder,
  fontSize: rem(18),
  whiteSpace: 'nowrap',
  overflow: 'hidden',
});
