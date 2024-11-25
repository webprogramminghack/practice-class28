import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './SwitchLayout.module.scss';
import { Center } from '@/components/Center';

export const SwitchLayout: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <Center>
      <motion.div
        className={styles.switch}
        data-isOn={isOn}
        onClick={() => setIsOn((prev) => !prev)}
      >
        <motion.div
          layout
          className={styles.handle}
          transition={{ type: 'spring', stiffness: 700, damping: 30 }}
        />
      </motion.div>
    </Center>
  );
};
