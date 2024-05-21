import { style } from '@vanilla-extract/css';

import { breakpoint, rem, theme } from '@/styles';

export const header = style({
  ...theme.layouts.rowBetween,
  position: 'fixed',
  paddingBlock: rem(31),
  paddingInline: rem(54),
  zIndex: theme.zIndex.header,

  ...breakpoint({
    tablet: { paddingInline: rem(86) },
  }),
});

export const logo = style({
  ...theme.layouts.center,
  height: rem(45),
  userSelect: 'none',
});