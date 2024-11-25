import React from 'react';
import { motion } from 'framer-motion';
import styles from './RepeatAndDelay.module.scss';
import { Center } from '@/components/Center';

export const RepeatAndDelay: React.FC = () => {
  return (
    <Center>
      <motion.div
        className={styles.element}
        animate={{
          rotate: 360,
          transition: {
            ease: 'linear',
            duration: 2,
            repeat: Infinity,
            // delay: 1,
            // repeatDelay: 1,
          },
        }}
        whileHover={{ scale: 2, transition: { duration: 0.5 } }}
      />
    </Center>
  );
};
