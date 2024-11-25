import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ScaleCorrection.module.scss';
import { Center } from '@/components/Center';
import clsx from 'clsx';

export const ScaleCorrection: React.FC = () => {
  const [big, setBig] = useState(false);
  return (
    <Center>
      <motion.div
        className={clsx(styles.parent, big ? styles.big : styles.small)}
        layout
        transition={{ duration: 1 }}
        onClick={() => setBig((prev) => !prev)}
      >
        <motion.div className={styles.child} layout />
      </motion.div>
    </Center>
  );
};
