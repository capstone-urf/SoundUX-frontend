import { clsx } from 'clsx';
import React, { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';

import * as styles from './Checkbox.css';

type CheckboxProps = {
  label: string | ReactNode;
  margin?: string;
} & ComponentPropsWithoutRef<'input'>;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, margin, ...rest }, ref) => {
    const isChecked = !!rest.checked;

    return (
      <label className={styles.checkboxContainer} style={{ margin }}>
        <input
          ref={ref}
          type="checkbox"
          {...rest}
          className={styles.hiddenCheckbox}
        />
        <div
          className={clsx(styles.styledCheckbox.default, {
            [styles.styledCheckbox.checked]: isChecked,
            [styles.styledCheckbox.unchecked]: !isChecked,
          })}
        />
        <span
          className={clsx(styles.checkboxLabel.default, {
            [styles.checkboxLabel.checked]: isChecked,
            [styles.checkboxLabel.unchecked]: !isChecked,
          })}
        >
          {label}
        </span>
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
