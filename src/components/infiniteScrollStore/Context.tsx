import React, { createContext, FC, useContext, useMemo } from "react";

import { Refs } from "./Refs";

interface AppState {
  refs?: Refs;
}
const initialValue: AppState = {};
export const InfiniteScrollContext = createContext(initialValue);
export const useInfiniteScrollContext = () => useContext(InfiniteScrollContext);
export const InfiniteScrollContextProvider: FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const refs = useMemo(() => new Refs(), []);
  return <InfiniteScrollContext.Provider value={{ refs }}>{children}</InfiniteScrollContext.Provider>;
};
