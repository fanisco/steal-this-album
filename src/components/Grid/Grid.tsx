import React, { FC } from 'react';
import clsx from 'clsx';

import type {
  ColumnCountLg,
  ColumnCountMd,
  ColumnCountXs,
  Sizes,
} from './Grid.types';
import styles from './Grid.module.scss';

const sizes: Sizes = {
  lg: {
    1: styles.col_lg_1,
    2: styles.col_lg_2,
    3: styles.col_lg_3,
    4: styles.col_lg_4,
    5: styles.col_lg_5,
    6: styles.col_lg_6,
    7: styles.col_lg_7,
    8: styles.col_lg_8,
    9: styles.col_lg_9,
    10: styles.col_lg_10,
    11: styles.col_lg_11,
    12: styles.col_lg_12,
  },
  md: {
    1: styles.col_md_1,
    2: styles.col_md_2,
    3: styles.col_md_3,
    4: styles.col_md_4,
    5: styles.col_md_5,
    6: styles.col_md_6,
    7: styles.col_md_7,
    8: styles.col_md_8,
  },
  xs: {
    1: styles.col_xs_1,
    2: styles.col_xs_2,
    3: styles.col_xs_3,
    4: styles.col_xs_4,
  },
};
const offsets = {
  lg: {
    1: styles.col_lg_o1,
    2: styles.col_lg_o2,
    3: styles.col_lg_o3,
    4: styles.col_lg_o4,
    5: styles.col_lg_o5,
    6: styles.col_lg_o6,
    7: styles.col_lg_o7,
    8: styles.col_lg_o8,
    9: styles.col_lg_o9,
    10: styles.col_lg_o10,
    11: styles.col_lg_o11,
    12: styles.col_lg_o12,
  },
  md: {
    1: styles.col_md_o1,
    2: styles.col_md_o2,
    3: styles.col_md_o3,
    4: styles.col_md_o4,
    5: styles.col_md_o5,
    6: styles.col_md_o6,
    7: styles.col_md_o7,
    8: styles.col_md_o8,
  },
  xs: {
    1: styles.col_xs_o1,
    2: styles.col_xs_o2,
    3: styles.col_xs_o3,
    4: styles.col_xs_o4,
  },
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
  xs?: ColumnCountXs;
  md?: ColumnCountMd;
  lg?: ColumnCountLg;
}
interface OffsetProps {
  xsOffset?: ColumnCountXs;
  mdOffset?: ColumnCountMd;
  lgOffset?: ColumnCountLg;
}
interface AlignProps {
  align?: keyof typeof aligns;
}

export const Col: FC<
  ChildrenProps & ClassnameProps & SizeProps & OffsetProps & AlignProps
> = ({
  xs,
  md,
  lg,
  xsOffset,
  mdOffset,
  lgOffset,
  align,
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        className,
        styles.col,
        sizes.xs[xs],
        sizes.md[md],
        sizes.lg[lg],
        offsets.xs[xsOffset],
        offsets.md[mdOffset],
        offsets.lg[lgOffset],
        aligns[align]
      )}
    >
      {children}
    </div>
  );
};

export const Row: FC<ChildrenProps & ClassnameProps> = ({
  className,
  children,
}) => <div className={clsx(className, styles.row)}>{children}</div>;

export const Container: FC<ChildrenProps & ClassnameProps> = ({
  className,
  children,
}) => <div className={clsx(className, styles.container)}>{children}</div>;
