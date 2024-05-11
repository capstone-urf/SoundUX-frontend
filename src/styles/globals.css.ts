import { globalStyle } from '@vanilla-extract/css';

import './layers.css';
import './reset.css';
import { theme } from '@/styles/styles.css';

globalStyle('body', {
  paddingBottom: 'env(safe-area-inset-bottom)',
  backgroundColor: theme.colors.background,
});
