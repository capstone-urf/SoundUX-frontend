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
import PlaceholderAnimation from './PlaceholderAnimation';

type InputProps = {
  id?: string;
  isValid?: boolean;
  style?: CSSProperties;
  placeholders?: string[];
  placeholderDuration?: number;
} & ComponentPropsWithoutRef<'input'>;

const placeholderTexts = ['어떤 것을 찾으시나요?'];

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { id: propId, style, placeholders, placeholderDuration = 3000, ...props },
    ref,
  ) => {
    const [id, setId] = useState(propId || v4());

    useEffect(() => {
      if (propId) setId(propId);
    }, [propId]);

    return (
      <div className={styles.inputContainer} style={style}>
        <input id={id} ref={ref} className={styles.input} required {...props} />
        {props.value === '' && (
          <PlaceholderAnimation
            placeholders={placeholders || placeholderTexts}
            duration={placeholderDuration}
          />
        )}
        <span className={styles.inputIcon}>
          <SearchIcon width={18} height={18} fill="#8B8B8B" />
        </span>
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
