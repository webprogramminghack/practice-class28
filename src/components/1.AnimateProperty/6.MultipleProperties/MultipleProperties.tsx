import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './MultipleProperties.module.scss';
import { Center } from '@/components/Center';

export const MultipleProperties: React.FC = () => {
  // const [animate, setAnimate] = useState({ scale: 1, rotate: 0 });

  return (
    <Center>
      <motion.div
        className={styles.element}
        // animate={animate}
        // onTapStart={() => setAnimate({ scale: 1.25, rotate: 90 })}
        // onTap={() => setAnimate({ scale: 1, rotate: 0 })}
        whileTap={{
          scale: 1.25,
          rotate: 90,
        }}
        // whileHover={{
        //   scale: 1.25,
        //   rotate: 90,
        // }}
      />
    </Center>
  );
};
