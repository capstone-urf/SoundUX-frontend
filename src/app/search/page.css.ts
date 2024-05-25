import { style } from '@vanilla-extract/css';

import { rem, theme } from '@/styles';

export const searchPageGrid = style({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: `${rem(160)} 1fr`,
});

export const searchLeftTab = style({});

export const searchRightTab = style({
  ...theme.layouts.columnCenterX,
  width: '100%',
});
