import React from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './Basic.module.scss';
import { Center } from '@/components/Center';

const variants: Variants = {
  start: { rotate: 180 },
  hoverState: { borderRadius: '75px' },
  tapState: { backgroundColor: '#ffd700' },
};

export const Basic: React.FC = () => {
  return (
    <Center>
      <motion.div
        className={styles.element}
        variants={variants}
        animate='start'
        whileHover='hoverState'
        whileTap='tapState'
      />
    </Center>
  );
};
