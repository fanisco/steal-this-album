export type ColumnCountXs = 1 | 2 | 3 | 4;
export type ColumnCountMd = ColumnCountXs | 5 | 6 | 7 | 8;
export type ColumnCountLg = ColumnCountMd | 9 | 10 | 11 | 12;

export type SizesXs = Record<ColumnCountXs, string>;
export type SizesMd = Record<ColumnCountMd, string>;
export type SizesLg = Record<ColumnCountLg, string>;

export type Sizes = {
  xs: SizesXs;
  md: SizesMd;
  lg: SizesLg;
};

export type Breakpoints = keyof Sizes;
