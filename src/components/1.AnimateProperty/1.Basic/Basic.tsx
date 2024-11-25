import React from 'react';
import { motion } from 'framer-motion';
import styles from './Basic.module.scss';
import { Center } from '@/components/Center';

export const Basic: React.FC = () => {
  return (
    <Center>
      <motion.div
        className={styles.basic}
        animate={{
          left: 10,
          top: 10,
          scale: 0.5,
          rotate: 45,
          backgroundColor: 'orange',
        }}
        transition={{ duration: 0.3 }}
      />
    </Center>
  );
};
