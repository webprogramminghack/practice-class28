import React from 'react';
import { motion } from 'framer-motion';
import styles from './XAndYRule.module.scss';
import { Center } from '@/components/Center';

export const XAndYRule: React.FC = () => {
  return (
    <div>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <motion.div
        className={styles.element}
        animate={{ y: 200 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
    </div>
  );
};
