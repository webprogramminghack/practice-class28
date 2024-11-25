import React from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './Staggering.module.scss';
import { Center } from '@/components/Center';

const containerVariants: Variants = {
  initial: { skewX: -10 },
  start: { skewX: 0 },
  hoverState: { scale: 1.05 },
};

const itemVariants: Variants = {
  initial: { x: 50, opacity: 0, backgroundColor: '#fa2' },
  start: { x: 0, opacity: 1 },
  tapState: { backgroundColor: '#f00' },
};

export const Staggering: React.FC = () => {
  return (
    <Center>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial='initial'
        animate='start'
        whileHover='hoverState'
        whileTap='tapState'
        transition={{
          delayChildren: 0.2,
          staggerChildren: 0.2,
          when: 'afterChildren',
        }}
      >
        {new Array(4).fill(null).map((_, index) => (
          <motion.div
            key={index}
            className={styles.item}
            variants={itemVariants}
          />
        ))}
      </motion.div>
    </Center>
  );
};
