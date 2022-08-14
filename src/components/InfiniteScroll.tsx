import { FC, useEffect, useMemo, useRef, useState } from "react";

import {
  getPositionIndex,
  getVisibleItemsByPositions,
  useDebouncedFunction,
  useThrottledFunction,
} from "./InfiniteScroll.helpers";
import { Item } from "./Item";
import type { IItem, IItemPosition, IItemSize } from "./types";

const RESIZE_DEBOUNCE_MS = 100;
const SCROLL_THROTTLE_MS = 10;

type InfiniteScrollProps = {
  data: Array<IItem>;
  offset?: number;
  itemHeight?: number;
  itemSize?: IItemSize;
};

export const InfiniteScroll: FC<InfiniteScrollProps> = ({
  data,
  offset = 0,
  itemHeight,
  itemSize,
}) => {
  const [documentHeight, setDocumentHeight] = useState(
    document.body.offsetHeight
  );
  const debouncedOnResize = useDebouncedFunction(() => {
    setDocumentHeight(document.body.offsetHeight);
  }, RESIZE_DEBOUNCE_MS);

  const positions = useMemo(() => {
    return data.reduce<IItemPosition[]>((acc, item) => {
      const prev = acc[acc.length - 1];
      let height = 0;

      if (typeof itemHeight === "number") {
        height = itemHeight;
      } else if (typeof itemSize === "function") {
        height = itemSize(item);
      }

      if (!prev) {
        return [...acc, { top: offset, bottom: offset + height }];
      } else {
        return [...acc, { top: prev.bottom, bottom: prev.bottom + height }];
      }
    }, []);
  }, [data, offset, itemHeight, itemSize]);

  const [positionIndex, setPositionIndex] = useState(
    getPositionIndex(positions)
  );
  const throttledOnScroll = useThrottledFunction(
    () => setPositionIndex(getPositionIndex(positions)),
    SCROLL_THROTTLE_MS
  );

  const items = useMemo(() => {
    const visibleItems = getVisibleItemsByPositions(
      documentHeight,
      positions,
      positionIndex
    );
    const start = Math.max(positionIndex - visibleItems, 0);
    const end = start + visibleItems * 2;
    return data.slice(start, end);
  }, [data, documentHeight, positions, positionIndex]);

  useEffect(() => {
    window.addEventListener("resize", debouncedOnResize);
    window.addEventListener("scroll", throttledOnScroll);

    return () => {
      window.removeEventListener("resize", debouncedOnResize);
      window.removeEventListener("scroll", throttledOnScroll);
    };
  }, [debouncedOnResize, throttledOnScroll]);

  const getItemTop = (item: IItem) =>
    positions[data.indexOf(item)].top - offset;
  const height = positions[positions.length - 1].bottom;

  console.log("[InfiniteScroll]: Render", positionIndex);

  return (
    <div
      className="items"
      style={{ position: "relative", height }}
    >
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
