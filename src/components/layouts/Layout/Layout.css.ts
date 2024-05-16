import { style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';

export const mainWrapper = style({
  ...theme.layouts.column,
  height: '100%',
});

export const main = style({
  ...theme.layouts.columnCenterX,
  width: '100%',
  height: '100%',
  maxWidth: theme.sizes.app,
  paddingTop: rem(107),
  paddingInline: rem(54),
  overflow: 'hidden',
});
