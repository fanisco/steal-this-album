import { FC, HTMLAttributes, useEffect, useRef } from "react";

import { useInfiniteScrollContext } from "./infiniteScrollStore";
import { IItem } from "./types";

export const Item: FC<IItem & HTMLAttributes<HTMLDivElement>> = ({
  title,
  body,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { refs } = useInfiniteScrollContext();

  useEffect(() => {
    refs?.register(ref);
    return () => refs?.unregister(ref);
  }, [refs]);

  return (
    <div {...rest} ref={ref} className="item">
      <h4 className="item__title">{title}</h4>
      <p className="item__body">{body}</p>
    </div>
  );
};
