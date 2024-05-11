import { style } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/styles.css';

export const header = style({
  ...theme.layouts.rowBetween,
  paddingBlock: rem(31),

});
