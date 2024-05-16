import { style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';

export const header = style({
  ...theme.layouts.rowBetween,
  position: 'fixed',
  paddingBlock: rem(31),
  paddingInline: rem(86),
  zIndex: theme.zIndex.header,
});

export const logo = style({
  ...theme.layouts.center,
  height: rem(45),
  userSelect: 'none',
});
