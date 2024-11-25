import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './MultipleChildren.module.scss';
import clsx from 'clsx';
import { Center } from '@/components/Center';

export const MultipleChildren: React.FC = () => {
  const [count, setCount] = useState(0);

  const segments = [];
  const increment = () => {
    setCount((count) => (count < 8 ? count + 1 : count));
  };

  const decrement = () => {
    setCount((count) => (count > 0 ? count - 1 : count));
  };

  for (let i = 0; i < count; i++) {
    segments.push(
      <motion.div
        className={clsx(styles.segment, {
          [styles.low]: i <= 4,
          [styles.medium]: i > 4 && i <= 6,
          [styles.high]: i >= 7,
        })}
        style={{ originY: 1 }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        key={i}
      />
    );
  }

  return (
    <Center>
      <div className={styles.controls}>
        <div className={styles.actions}>
          <motion.div
            className={clsx(styles.button, styles.plusButton)}
            whileTap={{ opacity: 0.6 }}
            onTap={increment}
          >
            +
          </motion.div>
          <motion.div
            className={clsx(styles.button, styles.minusButton)}
            whileTap={{ opacity: 0.6 }}
            onTap={decrement}
          >
            -
          </motion.div>
        </div>
        <div className={styles.segments}>
          <AnimatePresence>{segments}</AnimatePresence>
        </div>
      </div>
    </Center>
  );
};
