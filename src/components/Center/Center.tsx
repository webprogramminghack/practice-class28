import React from 'react';
import styles from './Center.module.scss';

type CenterProps = {
  children: React.ReactNode;
};

export const Center: React.FC<CenterProps> = ({ children }) => {
  return <div className={styles.center}>{children}</div>;
};
