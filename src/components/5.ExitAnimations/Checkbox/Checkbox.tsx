import React, { useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import styles from './Checkbox.module.scss';
import { Center } from '@/components/Center';

const checkVariants: Variants = {
  hidden: { opacity: 0, scale: 0.1 },
  start: { opacity: 1, scale: 1 },
  exit: { opacity: 0 },
};

export const Checkbox: React.FC = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <Center>
      <motion.div
        className={styles.checkbox}
        whileTap={{ scale: 0.95 }}
        onTap={() => setIsChecked((prev) => !prev)}
      >
        <AnimatePresence initial={false}>
          {isChecked && (
            <motion.div
              style={{ originX: 0, originY: 1 }}
              className={styles.check}
              variants={checkVariants}
              initial='hidden'
              animate='start'
              exit='exit'
            >
              <svg xmlns='http://www.w3.org/2000/svg' width='150' height='150'>
                <path
                  d='M 38 74.707 L 62.647 99.353 L 108.5 53.4'
                  fill='transparent'
                  strokeWidth='20'
                  stroke='#40f'
                  strokeLinecap='round'
                />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Center>
  );
};
