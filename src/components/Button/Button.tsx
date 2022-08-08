import React, { FC } from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

const views = {
  primary: styles.button_primary,
  secondary: styles.button_secondary,
};

export const Button: FC<{
  children?: React.ReactNode;
  view?: keyof typeof views;
}> = ({ view = 'primary', children }) => (
  <button className={clsx(styles.button, views[view])} type="button">
    {children}
  </button>
);
