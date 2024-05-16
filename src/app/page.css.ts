import { style } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';
import { theme } from '@/styles/styles.css';

export const imageContainer = style({
  ...theme.layouts.center,
  position: 'relative',
  width: '100%',
  maxWidth: rem(1305),
  aspectRatio: '1305 / 564',
});

export const gradient = style({
  position: 'absolute',
  top: 0,
  left: '50%',
  width: 'calc(var(--vw, 1vw) * 100)',
  height: '100%',
  transform: 'translateX(-50%)',
  background:
    'linear-gradient(to bottom, rgba(20, 20, 20, 0) 0%, #141414 100%)',
});

export const mainContainer = style({
  ...theme.layouts.columnCenterX,
  alignSelf: 'center',
  zIndex: 1,
});

export const mainTitle = style({
  fontSize: rem(64),
  fontWeight: theme.fontWeights.semibold,
  lineHeight: '130%',
  textAlign: 'center',
});

export const recommendedMusicList = style({});
