import classNames from "classnames";
import { FC, useEffect, useLayoutEffect } from "react";
import Icon from "../Icon";

interface Props {
  direction: "left" | "right";
  container: HTMLDivElement | null;
}

const SrollingButton: FC<Props> = ({ direction, container }) => {
  let directionValue: number;
  if (direction === "left") directionValue = -1;
  if (direction === "right") directionValue = 1;

  const handleHorizontalScroll = () => {
    if (!container) return;

    const parentWidth = container.offsetWidth;
    const currentPosition = container.scrollLeft;
    const newPosition = currentPosition + (parentWidth - 200) * directionValue;
    container.scroll({
      left: newPosition,
      behavior: "smooth",
    });
  };

  const contentSize = container?.clientWidth;
  const wrapperSize = container?.parentElement?.clientWidth;

  if (contentSize && wrapperSize && contentSize < wrapperSize) {
    return null;
  }

  return (
    <button
      className={classNames(
        "absolute flex items-center justify-center right-2 z-30 w-8 h-8 text-3xl rounded-full bg-white/50 shadow-lg border border-black/10 backdrop-blur-md text-gray-500 -translate-y-2",
        "hover:text-white hover:bg-black hover:border-neutral-500 hover:cursor-pointer",
        { "right-2": direction === "right", "left-2": direction === "left" }
      )}
      onClick={handleHorizontalScroll}
    >
      <Icon iconName={direction === "right" ? "arrow-right" : "arrow-left"} />
    </button>
  );
};

export default SrollingButton;
