import { style } from '@vanilla-extract/css';

import { rem, breakpoint, theme } from '@/styles';

export const entryContainer = style({
  ...theme.layouts.center,
  position: 'relative',
  width: '100%',
  maxWidth: rem(1305),
  aspectRatio: '1305 / 564',
});

export const entryBackgroundImage = style({
  width: '100%',
  height: '100%',
  userSelect: 'none',
  objectFit: 'cover',
});

export const entryGradient = style({
  position: 'absolute',
  top: 0,
  left: '50%',
  width: 'calc(var(--vw, 1vw) * 100)',
  height: '100%',
  userSelect: 'none',
  transform: 'translateX(-50%)',
  background:
    'linear-gradient(to bottom, rgba(20, 20, 20, 0) 0%, #141414 100%)',
});

export const mainContainer = style({
  ...theme.layouts.columnCenterX,
  width: '100%',
  paddingBlock: rem(80),
  zIndex: 1,
});

export const mainTitle = style({
  fontSize: rem(32),
  fontWeight: theme.fontWeights.semibold,
  lineHeight: '130%',
  textAlign: 'center',
  userSelect: 'none',

  ...breakpoint({
    tablet: { fontSize: rem(48) },
    desktop: { fontSize: rem(64) },
  }),
});

export const showcaseContainer = style({
  ...theme.layouts.column,
  width: '100%',
  maxWidth: theme.sizes.main,
  paddingBlock: rem(69),
});

export const showcaseTitle = style({
  fontSize: rem(26),
  fontWeight: theme.fontWeights.semibold,
  textAlign: 'left',
  lineHeight: '130%',

  ...breakpoint({
    tablet: { fontSize: rem(32) },
    desktop: { fontSize: rem(40) },
  }),
});
