import React from 'react';
import styles from './CustomProperty.module.scss';
import { motion, Variants } from 'framer-motion';
import { Center } from '@/components/Center';

const itemVariants: Variants = {
  initial: () => ({
    scale: 0,
    opacity: 0,
    backgroundColor: `hsl(${Math.floor(Math.random() * 360)}, 80%, 50%)`,
  }),
  start: (custom) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: custom,
    },
  }),
};

class DelayGroup {
  indexes: number[];
  delay: number;

  constructor(indexes: number[], delay: number) {
    this.indexes = indexes;
    this.delay = delay;
  }

  includes(index: number): number {
    return this.indexes.includes(index) ? this.delay : 0;
  }
}

const innerSide = new DelayGroup([1, 3, 5, 7], 0, 2);
const outeSide = new DelayGroup([0, 2, 6, 8], 0.5);
const center = new DelayGroup([4], 1);

const getDelay = (index: number) => {
  return (
    innerSide.includes(index) ||
    outeSide.includes(index) ||
    center.includes(index)
  );
};

export const CustomProperty: React.FC = () => {
  return (
    <Center>
      <motion.div
        className={styles.container}
        initial='initial'
        animate='start'
      >
        {new Array(9).fill(null).map((_, index) => (
          <motion.div
            className={styles.item}
            variants={itemVariants}
            key={index}
            custom={getDelay(index)}
          />
        ))}
      </motion.div>
    </Center>
  );
};
