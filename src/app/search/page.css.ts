import { style, styleVariants } from '@vanilla-extract/css';

import { breakpoint, rem, theme } from '@/styles';

export const searchPageGrid = style({
  display: 'grid',
  width: '100%',
  maxWidth: rem(1200),
  gridTemplateColumns: `1fr`,

  ...breakpoint({ tablet: { gridTemplateColumns: `${rem(160)} 1fr` } }),
});

export const searchLeftTab = style({});

export const searchRightTab = style({
  ...theme.layouts.columnCenterX,
  width: '100%',
});

export const tags = styleVariants({
  list: {
    display: 'flex',
    width: '100%',
    marginTop: rem(16),
    gap: rem(10),
    flexWrap: 'wrap',
    overflowX: 'auto',
  },
  item: {
    padding: `${rem(8)} ${rem(12)}`,
    color: theme.colors.white,
    fontSize: rem(14),
    fontWeight: theme.fontWeights.medium,
    borderRadius: rem(7),
    backgroundColor: theme.colors.tag,
  },
});

export const music = styleVariants({
  list: {
    ...theme.layouts.columnCenterY,
    width: '100%',
    marginTop: rem(16),
  },
  item: {
    ...theme.layouts.rowBetween,
    padding: rem(20),
  },
  metadataContainer: {
    ...theme.layouts.centerY,
    gap: rem(20),
  },
  albumCover: {
    position: 'relative',
    width: rem(56),
    height: rem(56),
    userSelect: 'none',
    objectFit: 'cover',
    borderRadius: rem(4),
    overflow: 'hidden',
  },
  albumTitleContainer: {
    ...theme.layouts.column,
    color: theme.colors.white,
    fontSize: rem(16),
    fontWeight: theme.fontWeights.medium,
    gap: rem(6),
  },
  albumArtist: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: rem(15),
  },
  albumControlContainer: {
    ...theme.layouts.centerY,
    gap: rem(30),
    color: theme.colors.white,
    fontSize: rem(14),
  },
  albumControlButton: {
    cursor: 'pointer',
  },
});
