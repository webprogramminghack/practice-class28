import React from 'react';
import { motion } from 'framer-motion';
import styles from './Basic.module.scss';
import { Center } from '@/components/Center';

export const InitialPropertyBasic: React.FC = () => {
  return (
    <Center>
      {/* <motion.div
        className={styles.element}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 3 },
        }}
        whileHover={{ scale: 1.05 }}
      /> */}
      {/* <motion.div
        className={styles.element}
        initial={{ x: -200 }}
        animate={{
          x: 0,
        }}
        transition={{ duration: 3 }}
      /> */}
      <motion.div
        className={styles.element}
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
        }}
        transition={{ type: 'spring', damping: 7 }}
      />
    </Center>
  );
};
