import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Center } from '@/components/Center';
import styles from './AddingState.module.scss';

export const AddingState: React.FC = () => {
  const [degrees, setDegrees] = useState(0);

  function rotate() {
    setDegrees(degrees + 45);
  }

  return (
    <Center>
      <motion.div
        className={styles.element}
        animate={{ rotate: degrees }}
        onTap={rotate}
      />
    </Center>
  );
};
