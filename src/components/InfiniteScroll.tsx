import { FC, useEffect, useMemo, useState } from "react";

import {
  getPageByScroll,
  getVisibleItemsByItems,
  useThrottledFunction,
} from "./InfiniteScroll.helpers";
import { Item } from "./Item";
import type { IItem, IItemSize } from "./types";

type InfiniteScrollProps = {
  data: Array<IItem>;
  threshold?: number;
  itemHeight?: number;
  itemSize?: IItemSize;
};

export const InfiniteScroll: FC<InfiniteScrollProps> = ({
  data,
  threshold = 3,
  itemHeight,
  itemSize,
}) => {
  const { visibleItems, height } = useMemo(() => {
    const containerHeight = document.body.offsetHeight;
    let height = "";
    let visibleItems = 10;
    if (typeof itemHeight === "number") {
      height = `${itemHeight * data.length}px`;
      visibleItems = Math.ceil(containerHeight / itemHeight);
    } else if (typeof itemSize === "function") {
      height = `${data.reduce((acc, cur) => acc + itemSize(cur), 0)}px`;
      visibleItems = getVisibleItemsByItems(containerHeight, data, itemSize);
    }
    return { height, visibleItems };
  }, [data, itemHeight, itemSize]);

  const positions = useMemo(() => {
    if (typeof itemHeight === "number") {
      return data.map<number>((_, i) => itemHeight * i);
    } else if (typeof itemSize === "function") {
      return [0]
        .concat(
          data.reduce<number[]>(
            (acc, item) => [
              ...acc,
              (acc[acc.length - 1] || 0) + itemSize(item),
            ],
            []
          )
        )
        .slice(0, data.length);
    } else {
      return [];
    }
  }, [data, itemHeight, itemSize]);

  const [page, setPage] = useState(getPageByScroll(visibleItems));
  const throttledOnScroll = useThrottledFunction(
    () => setPage(() => getPageByScroll(visibleItems)),
    10
  );

  const items = useMemo(() => {
    // const start = Math.max(offset - threshold, 0);
    const start = Math.max(page * visibleItems - visibleItems, 0);
    // const end =
    //   start + visibleItems + threshold + Math.min(offset - start, threshold);
    const end = start + visibleItems * 2;
    console.log(start, end, page);
    return data.slice(start, end);
  }, [data, /* threshold,  */ visibleItems, page]);

  useEffect(() => {
    window.addEventListener("scroll", throttledOnScroll);
    return () => {
      window.removeEventListener("scroll", throttledOnScroll);
    };
  }, [throttledOnScroll]);

  const getItemTop = (item: IItem) => positions[data.indexOf(item)];

  console.log("[InfiniteScroll]: Render", page);

  return (
    <div className="items" style={{ height }}>
    {items.map((item) => (
        <Item
        {...item}
        key={item.id}
        style={{
            position: "absolute",
            top: `${getItemTop(item)}px`,
        }}
        />
    ))}
    </div>
  );
};
