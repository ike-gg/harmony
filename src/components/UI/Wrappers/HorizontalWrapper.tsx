import classNames from "classnames";
import { FC, MouseEvent, ReactNode, useRef } from "react";
import Icon from "../Icon";
import SrollingButton from "./ScrollingButton";

interface Props {
  rows?: number;
  children: ReactNode;
}

const HorizontalWrapper: FC<Props> = ({ children, rows }) => {
  const horizontalWrapper = useRef<HTMLDivElement>(null);

  let rowClass;
  if (rows === 1) rowClass = "grid-rows-1";
  if (rows === 2) rowClass = "grid-rows-2";
  if (rows === 3) rowClass = "grid-rows-3";
  if (!rows) rowClass = "grid-rows-1";

  const classes =
    `grid grid-flow-col-dense justify-start overflow-x-scroll gap-3 gap-y-5 pb-4 snap-mandatory snap-x ` +
    rowClass;

  return (
    <section className="relative flex items-center">
      <SrollingButton container={horizontalWrapper.current} direction="left" />
      <div ref={horizontalWrapper} className={classes}>
        {children}
      </div>
      <SrollingButton container={horizontalWrapper.current} direction="right" />
    </section>
  );
};

export default HorizontalWrapper;
