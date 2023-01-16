import { FC, ReactNode } from "react";

interface Props {
  rows?: number;
  children: ReactNode;
}

const HorizontalWrapper: FC<Props> = ({ children, rows }) => {
  let rowClass;
  if (rows === 1) rowClass = "grid-rows-1";
  if (rows === 2) rowClass = "grid-rows-2";
  if (rows === 3) rowClass = "grid-rows-3";
  if (!rows) rowClass = "grid-rows-1";

  const classes =
    `grid grid-flow-col-dense justify-start overflow-x-scroll gap-3 pb-4 snap-mandatory snap-x ` +
    rowClass;

  return <div className={classes}>{children}</div>;
};

export default HorizontalWrapper;
