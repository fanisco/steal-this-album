import React, { FC } from 'react';
import clsx from 'clsx';

import styles from './Grid.module.scss';

const columns = {
  1: styles.col_1,
  2: styles.col_2,
  3: styles.col_3,
  4: styles.col_4,
  5: styles.col_5,
  6: styles.col_6,
  7: styles.col_7,
  8: styles.col_8,
  9: styles.col_9,
  10: styles.col_10,
  11: styles.col_11,
  12: styles.col_12,
};
const offsets = {
  1: styles.col_o1,
  2: styles.col_o2,
  3: styles.col_o3,
  4: styles.col_o4,
  5: styles.col_o5,
  6: styles.col_o6,
  7: styles.col_o7,
  8: styles.col_o8,
  9: styles.col_o9,
  10: styles.col_o10,
  11: styles.col_o11,
  12: styles.col_o12,
};

const aligns = {
  start: styles.col_start,
  center: styles.col_center,
  end: styles.col_end,
};

interface ChildrenProps {
  children: React.ReactNode;
}
interface ClassnameProps {
  className?: string;
}
interface SizeProps {
  size: keyof typeof columns;
}
interface OffsetProps {
  offset?: keyof typeof offsets;
}
interface AlignProps {
  align?: keyof typeof aligns;
}

export const Col: FC<
  ChildrenProps & ClassnameProps & SizeProps & OffsetProps & AlignProps
> = ({ size, offset, align, className, children }) => (
  <div
    className={clsx(
      className,
      styles.col,
      columns[size],
      offsets[offset],
      aligns[align]
    )}
  >
    {children}
  </div>
);

export const Row: FC<ChildrenProps & ClassnameProps> = ({
  className,
  children,
}) => <div className={clsx(className, styles.row)}>{children}</div>;
