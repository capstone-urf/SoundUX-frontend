import { globalStyle } from '@vanilla-extract/css';

import './layers.css';
import './reset.css';
import { theme } from '@/styles/styles.css';

globalStyle('html', {
  height: '100%',
});

globalStyle('body', {
  height: '100%',
  paddingBottom: 'env(safe-area-inset-bottom)',
  color: theme.colors.white,
  backgroundColor: theme.colors.background,
});
