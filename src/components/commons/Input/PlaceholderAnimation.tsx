import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, ReactElement } from 'react';

import { rem } from '@/styles/pxto';

import * as styles from './Input.css';

interface PlaceholderAnimationProps {
  placeholders: string[];
  duration: number;
  iconMargin: number;
}

const PlaceholderAnimation = ({
  placeholders,
  duration,
  iconMargin,
}: PlaceholderAnimationProps): ReactElement => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % placeholders.length);
    }, duration);
    return () => clearInterval(interval);
  }, [placeholders, duration]);

  return (
    <div
      className={styles.placeholderWrapper}
      style={{
        paddingLeft: `${rem(iconMargin)}`,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={placeholders[index]}
          className={styles.placeholder}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 12 }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
        >
          {placeholders[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default PlaceholderAnimation;
