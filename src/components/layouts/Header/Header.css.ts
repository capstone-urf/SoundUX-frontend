import { style } from '@vanilla-extract/css';

import { breakpoint, rem, theme } from '@/styles';

export const header = style({
  ...theme.layouts.rowBetween,
  position: 'fixed',
  width: '100%',
  paddingBlock: rem(12),
  paddingInline: rem(54),
  zIndex: theme.zIndex.header,

  transition: 'transform 0.5s ease 0s',
  transform: 'translateY(0px)',
  backdropFilter: 'blur(10px)',

  ...breakpoint({
    tablet: { paddingInline: rem(86) },
  }),
});

export const branding = style({
  ...theme.layouts.center,
  height: rem(45),
  fontSize: rem(24),
  fontWeight: theme.fontWeights.medium,
  userSelect: 'none',
  ...breakpoint({
    tablet: { fontSize: rem(32) },
  }),
});

export const navigationContainer = style({
  ...theme.layouts.centerY,
  gap: rem(40),
});

export const navigation = style({
  color: theme.colors.white,
  fontSize: rem(16),
  fontWeight: theme.fontWeights.medium,
});
