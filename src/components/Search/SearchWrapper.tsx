import React, { FC } from 'react';

import styles from './SearchWrapper.module.scss';

export const SearchWrapper: FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className={styles.root}>{children}</div>;
