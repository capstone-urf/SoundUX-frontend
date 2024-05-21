import { style } from '@vanilla-extract/css';

import { breakpoint, rem, theme } from '@/styles';

export const mainWrapper = style({
  ...theme.layouts.column,
  width: '100%',
  height: '100%',
});

export const main = style({
  ...theme.layouts.columnCenterX,
  width: '100%',
  height: '100%',
  paddingTop: rem(107),
  paddingInline: rem(32),
  marginInline: 'auto',
  overflow: 'hidden',

  ...breakpoint({
    tablet: { paddingInline: rem(54) },
  }),
});
