import { useEffect, useRef } from "react";

import { IItemPosition } from "./types";

export const getVisibleItemsByPositions = (
  containerHeight: number,
  positions: IItemPosition[],
  index: number
) => {
  let count = 0;
  let height = containerHeight;

  for (let i = index; i < positions.length; i++) {
    height -= positions[i].bottom - positions[i].top;
    count++;

    if (height <= 0) {
      break;
    }
  }

  return count;
};

export const getPositionIndex = (positions: IItemPosition[]) => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  return positions.findIndex((pos) => scrollTop <= pos.top);
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
