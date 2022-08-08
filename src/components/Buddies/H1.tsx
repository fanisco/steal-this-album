import React, { FC } from 'react';

import styles from './H1.module.scss';

export const H1: FC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 className={styles.h1}>{children}</h1>
);
