import { style, styleVariants } from '@vanilla-extract/css';

import { theme, rem } from '@/styles';

export const checkboxContainer = style({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  width: 'fit-content',
});

export const hiddenCheckbox = style({
  opacity: 0,
  position: 'absolute',
  margin: 0,
});

export const styledCheckbox = styleVariants({
  default: {
    width: rem(15),
    height: rem(15),
    border: `${rem(1)} solid ${theme.colors.white}`,
    borderRadius: rem(4),
    transition: 'all 0.2s',
  },
  checked: {
    borderWidth: rem(6),
    borderColor: theme.colors.white,
  },
  unchecked: {
    borderWidth: rem(1),
    borderColor: theme.colors.white,
  },
});

export const checkboxLabel = styleVariants({
  default: {
    marginLeft: rem(8),
    fontSize: rem(15),
  },
  checked: {
    color: theme.colors.white,
  },
  unchecked: {
    color: theme.colors.white,
  },
});
