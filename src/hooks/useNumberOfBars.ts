import { useState, useEffect, RefObject } from 'react';

export const useNumberOfBars = (
  containerRef: RefObject<HTMLDivElement>,
  barGap: number,
) => {
  const [numberOfBars, setNumberOfBars] = useState(0);

  useEffect(() => {
    const updateNumberOfBars = () => {
      if (containerRef.current) {
        const calculatedBars = Math.floor(
          containerRef.current.clientWidth / (barGap + 1), // bar + 1px
        );
        setNumberOfBars(calculatedBars);
      }
    };

    updateNumberOfBars(); // Initial calculation
    window.addEventListener('resize', updateNumberOfBars); // Add resize event listener

    return () => window.removeEventListener('resize', updateNumberOfBars); // Cleanup event listener on unmount
  }, [containerRef, barGap]);

  return numberOfBars;
};
