import {
  useState,
  useEffect,
  CSSProperties,
  forwardRef,
  ComponentPropsWithoutRef,
} from 'react';
import { v4 } from 'uuid';

import { SearchIcon } from '@/components/icons';
import { rem } from '@/styles/pxto';

import * as styles from './Input.css';
import PlaceholderAnimation from './PlaceholderAnimation';

type InputProps = {
  id?: string;
  isValid?: boolean;
  style?: CSSProperties;
  inputPadding?: number;
  iconMargin?: number;
  placeholders?: string[];
  placeholderDuration?: number;
} & ComponentPropsWithoutRef<'input'>;

const placeholderTexts = ['어떤 것을 찾으시나요?'];

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id: propId,
      style,
      inputPadding = 30,
      iconMargin = 60,
      placeholders,
      placeholderDuration = 3000,
      ...props
    },
    ref,
  ) => {
    const [id, setId] = useState(propId || v4());

    useEffect(() => {
      if (propId) setId(propId);
    }, [propId]);

    return (
      <div
        className={styles.inputContainer}
        style={{
          ...(style || {}),
          paddingLeft: `${rem(iconMargin)}`,
        }}
      >
        <input
          id={id}
          ref={ref}
          className={styles.input}
          style={{
            padding: `${rem(inputPadding)} ${rem(inputPadding)} ${rem(inputPadding)} 0`,
          }}
          required
          {...props}
        />
        {props.value === '' && (
          <PlaceholderAnimation
            placeholders={placeholders || placeholderTexts}
            duration={placeholderDuration}
            iconMargin={iconMargin}
          />
        )}
        <span
          className={styles.inputIcon}
          style={{
            left: rem(inputPadding),
          }}
        >
          <SearchIcon width={18} height={18} fill="#8B8B8B" />
        </span>
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
