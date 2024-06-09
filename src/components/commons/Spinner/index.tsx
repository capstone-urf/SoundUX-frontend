import { ReactElement } from 'react';

import { theme } from '@/styles/styles.css';

import * as styles from './Spinner.css';

type SpinnerProps = {
  size?: number;
  width?: number;
};

export const getSpinnerStyle = (size: number, width: number) => ({
  width: `${size}rem`,
  height: `${size}rem`,
  border: `${width}rem solid ${theme.colors.black}`,
  borderTop: `${width}rem solid ${theme.colors.primary}`,
});

const Spinner = ({ size = 120, width = 8 }: SpinnerProps): ReactElement => {
  return (
    <div
      className={styles.spinnerStyle}
      style={getSpinnerStyle(size / 16, width / 16)}
    />
  );
};

export default Spinner;
