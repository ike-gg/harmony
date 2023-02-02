import classNames from "classnames";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import SrollingButton from "./ScrollingButton";
import { isMobile } from "react-device-detect";

export type ScrollDirections = "left" | "right";

interface Props {
  rows?: number;
  children: ReactNode;
}

const HorizontalWrapper: FC<Props> = ({ children, rows = 1 }) => {
  const [isOverflow, setIsOverflow] = useState(false);
  const horizontalWrapper = useRef<HTMLDivElement>(null);

  const classes = classNames(
    `grid grid-flow-col-dense justify-start overflow-x-scroll gap-3 pb-4 snap-mandatory snap-x`,
    {
      "grid-rows-1": rows === 1,
      "grid-rows-2": rows === 2,
      "grid-rows-3": rows === 3,
    }
  );

  const horizontalScroll = (direction: ScrollDirections) => {
    const { current: container } = horizontalWrapper;
    if (!container) return;

    let directionValue: number = 0;
    if (direction === "left") directionValue = -1;
    if (direction === "right") directionValue = 1;

    const parentWidth = container.offsetWidth;
    const currentPosition = container.scrollLeft;
    const newPosition = currentPosition + (parentWidth - 200) * directionValue;
    container.scroll({
      left: newPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const { current: container } = horizontalWrapper;
    const contentSize = container?.scrollWidth;
    const containerSize = container?.parentElement?.clientWidth;

    if (contentSize && containerSize && contentSize > containerSize) {
      setIsOverflow(true);
    } else {
      setIsOverflow(false);
    }
  }, [horizontalWrapper]);

  return (
    <section className="relative flex items-center overflow-hidden">
      <div ref={horizontalWrapper} className={classes}>
        {children}
      </div>
      {isOverflow && !isMobile && (
        <>
          <SrollingButton handleScroll={horizontalScroll} direction="left" />
          <SrollingButton handleScroll={horizontalScroll} direction="right" />
        </>
      )}
    </section>
  );
};

export default HorizontalWrapper;
