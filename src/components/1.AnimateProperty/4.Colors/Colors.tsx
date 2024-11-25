import React from 'react';
import { motion } from 'framer-motion';
import { Center } from '@/components/Center';

export const Colors: React.FC = () => {
  return (
    <Center>
      <div style={{ width: 400, height: 400, position: 'relative' }}>
        <motion.div
          style={{
            width: 150,
            height: 150,
            borderRadius: 30,
            backgroundColor: '#fff',
            position: 'absolute',
            left: 40,
            top: 40,
          }}
          animate={{ backgroundColor: '#ff6347' }}
          transition={{ duration: 1 }}
        />
        <motion.div
          style={{
            width: 150,
            height: 150,
            borderRadius: 30,
            backgroundColor: '#ffffff',
            position: 'absolute',
            right: 40,
            bottom: 40,
          }}
          animate={{ backgroundColor: '#9273cc' }}
          transition={{ duration: 1, delay: 2 }}
        />

        <motion.div
          style={{
            width: 150,
            height: 150,
            borderRadius: 30,
            backgroundColor: '#fff',
            position: 'absolute',
            left: '50%',
            top: '50%',
            margin: '-75px 0 0 -75px',
          }}
          animate={{ backgroundColor: 'rgba(153, 204, 102, 0.8)' }}
          transition={{ duration: 1, delay: 1 }}
        />
      </div>
    </Center>
  );
};
