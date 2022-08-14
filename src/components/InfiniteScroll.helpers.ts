import { useEffect, useRef } from "react";
import { IItem, IItemSize } from "./types";

export const getVisibleItemsByItems = (
  containerHeight: number,
  items: IItem[],
  itemSize: IItemSize
) => {
  let count = 0;
  let height = containerHeight;

  for (const item of items) {
    height -= itemSize(item);
    count++;

    if (height <= 0) {
      break;
    }
  }

  return count;
};

export const getPageByScroll = (visibleItems: number) => {
  console.log(
    document.documentElement.scrollTop,
    document.documentElement.offsetHeight,
    Math.floor(
      (document.documentElement.scrollTop /
        document.documentElement.offsetHeight) *
        visibleItems
    ) / visibleItems
  );
  return (
    Math.floor(
      (document.body.scrollTop
        ? document.body.scrollTop / document.body.offsetHeight
        : document.documentElement.scrollTop /
          document.documentElement.offsetHeight) * visibleItems
    ) / visibleItems
  );
};

export const useDebouncedFunction = (callee: Function, delay: number) => {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  };

  useEffect(clearTimer, []);

  return (...args: any[]) => {
    clearTimer();
    timeoutRef.current = setTimeout(() => callee(...args), delay);
  };
};

export const useThrottledFunction = (callee: Function, delay: number) => {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  };

  useEffect(clearTimer, []);

  return (...args: any[]) => {
    if (timeoutRef.current) {
      return;
    }

    timeoutRef.current = setTimeout(() => {
      callee(...args);
      clearTimer();
    }, delay);
  };
};
