import classNames from "classnames";
import { FC, MouseEvent, MouseEventHandler, RefObject, useRef } from "react";
import Icon from "../Icon";
import { ScrollDirections } from "./HorizontalWrapper";

interface Props {
  direction: ScrollDirections;
  handleScroll: (direction: ScrollDirections) => void;
}

const SrollingButton: FC<Props> = ({ direction, handleScroll }) => {
  return (
    <button
      className={classNames(
        "absolute flex items-center justify-center right-2 z-30 w-8 h-8 text-3xl rounded-full bg-white/50 shadow-lg border border-black/10 backdrop-blur-md text-gray-500 -translate-y-2",
        "hover:text-white hover:bg-black hover:border-neutral-500 hover:cursor-pointer",
        { "right-2": direction === "right", "left-2": direction === "left" }
      )}
      onClick={() => {
        handleScroll(direction);
      }}
    >
      <Icon iconName={direction === "right" ? "arrow-right" : "arrow-left"} />
    </button>
  );
};

export default SrollingButton;
