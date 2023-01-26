import classNames from "classnames";
import { FC, MouseEvent, ReactNode, useCallback, useRef } from "react";
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

  const handleHorizontalScroll = useCallback(
    (event: MouseEvent<HTMLButtonElement>, direction: number) => {
      console.log(`container:`, horizontalWrapper);
      if (!horizontalWrapper.current) return;

      const { current: container } = horizontalWrapper;

      const parentWidth = container.offsetWidth;
      const currentPosition = container.scrollLeft;
      const newPosition = currentPosition + (parentWidth - 200) * direction;
      container.scroll({
        left: newPosition,
        behavior: "smooth",
      });
      console.log("performing scroll");
    },
    [children, horizontalWrapper]
  );

  return (
    <section className="relative flex items-center overflow-hidden">
      <SrollingButton
        handleScroll={(e) => {
          handleHorizontalScroll(e, -1);
        }}
        container={horizontalWrapper.current}
        direction="left"
      />
      <div ref={horizontalWrapper} className={classes}>
        {children}
      </div>
      <SrollingButton
        handleScroll={(e) => {
          handleHorizontalScroll(e, 1);
        }}
        container={horizontalWrapper.current}
        direction="right"
      />
    </section>
  );
};

export default HorizontalWrapper;
