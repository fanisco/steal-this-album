export interface IItem {
  id: string;
  title: string;
  body: string;
}

export interface IItemSize {
  (item: IItem): number;
}

export interface IItemPosition {
  top: number;
  bottom: number;
}
