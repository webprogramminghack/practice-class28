import React from 'react';
import { motion } from 'framer-motion';
import styles from './Basic.module.scss';
import { Center } from '@/components/Center';

export const TransitionBasic: React.FC = () => {
  return (
    <Center>
      <motion.div
        className={styles.element}
        animate={{ scale: 1.5 }}
        // transition={{ type: 'spring', damping: 5 }}
        transition={{ type: 'tween', duration: 2, ease: 'easeInOut' }}
      />
    </Center>
  );
};
