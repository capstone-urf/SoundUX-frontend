import { createGlobalTheme } from '@vanilla-extract/css';

import { rem } from '@/styles/pxto';

export const theme = createGlobalTheme(':root', {
  colors: {
    white: '#FFFFFF',
    spectrum: '#B2B2B2',
    gray: '#4C4C4C',
    placeholder: 'rgba(139, 139, 139, 0.72)',
    black: '#000000',
    border: '#272727',
    primary: '#20FFA2',
    secondary: '#8A8A8A',
    background: '#1A1A1A',
    tag: '#121212',
  },
  fontSizes: {},
  fontWeights: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  layouts: {
    center: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    centerX: {
      display: 'flex',
      justifyContent: 'center',
    },
    centerY: {
      display: 'flex',
      alignItems: 'center',
    },
    rowBetween: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
    },
    columnCenterX: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    columnCenterY: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  sizes: {
    app: rem(1512),
    main: rem(931),
  },
  zIndex: {
    header: '1024',
  },
});
