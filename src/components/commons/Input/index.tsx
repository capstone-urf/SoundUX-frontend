import {
  useState,
  useEffect,
  CSSProperties,
  forwardRef,
  ComponentPropsWithoutRef,
} from 'react';
import { v4 } from 'uuid';

import { SearchIcon } from '@/components/icons';

import * as styles from './Input.css';

type InputProps = {
  id?: string;
  isValid?: boolean;
  style?: CSSProperties;
} & ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id: propId, style, ...props }, ref) => {
    const [id, setId] = useState(propId || v4());

    useEffect(() => {
      if (propId) setId(propId);
    }, [propId]);

    return (
      <div className={styles.inputContainer} style={style}>
        <input id={id} ref={ref} className={styles.input} required {...props} />
        <span className={styles.inputIcon}>
          <SearchIcon width={18} height={18} fill="#8B8B8B" />
        </span>
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
