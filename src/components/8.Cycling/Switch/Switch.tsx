import { Center } from '@/components/Center';
import React, { useState } from 'react';
import styles from './Switch.module.scss';
import { AnimatePresence, motion, useCycle } from 'framer-motion';

const switchBackgroundVariants = {
  off: {
    scale: 0,
  },
  on: {
    scale: 1,
  },
};

const handleVariants = {
  off: {
    x: 0,
  },
  on: {
    x: 20,
  },
};

export const Switch: React.FC = () => {
  const [current, cycle] = useCycle('off', 'on');

  return (
    <Center>
      <div className={styles.container}>
        <motion.div
          className={styles.switch}
          initial
          animate={current}
          onTapStart={() => cycle()}
        >
          <AnimatePresence initial={false}>
            <motion.div
              className={styles.switchBackground}
              variants={switchBackgroundVariants}
              transition={{ ease: 'easeInOut' }}
            />
          </AnimatePresence>
          <motion.div
            className={styles.handle}
            variants={handleVariants}
            transition={{ ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </Center>
  );
};
