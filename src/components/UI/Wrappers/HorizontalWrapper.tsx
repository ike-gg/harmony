import classNames from "classnames";
import { FC, MouseEvent, ReactNode, useRef } from "react";
import Icon from "../Icon";
import SrollingButton from "./ScrollingButton";

interface Props {
  rows?: number;
  children: ReactNode;
}

const HorizontalWrapper: FC<Props> = ({ children, rows = 1 }) => {
  const horizontalWrapper = useRef<HTMLDivElement>(null);

  const classes = classNames(
    `grid grid-flow-col-dense justify-start overflow-x-scroll gap-3 pb-4 snap-mandatory snap-x`,
    {
      "grid-rows-1": rows === 1,
      "grid-rows-2": rows === 2,
      "grid-rows-3": rows === 3,
    }
  );

  return (
    <section className="relative flex items-center overflow-hidden">
      <SrollingButton container={horizontalWrapper.current} direction="left" />
      <div ref={horizontalWrapper} className={classes}>
        {children}
      </div>
      <SrollingButton container={horizontalWrapper.current} direction="right" />
    </section>
  );
};

export default HorizontalWrapper;
