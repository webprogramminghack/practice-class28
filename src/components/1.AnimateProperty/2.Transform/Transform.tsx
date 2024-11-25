import React from 'react';
import { motion } from 'framer-motion';
import styles from './Transform.module.scss';
import { Center } from '@/components/Center';

export const Transform: React.FC = () => {
  return (
    <Center>
      <motion.div
        className={styles.transform}
        animate={{ scaleY: 0.5, scaleX: 2, skewX: -6, y: -120 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </Center>
  );
};
