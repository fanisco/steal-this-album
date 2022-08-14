import { FC, HTMLAttributes } from "react";

import { IItem } from "./types";

export const Item: FC<IItem & HTMLAttributes<HTMLDivElement>> = ({
  title,
  body,
  ...rest
}) => {
  return (
    <div {...rest} className="item">
      <h4 className="item__title">{title}</h4>
      <p className="item__body">{body}</p>
    </div>
  );
};
