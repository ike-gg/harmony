import classNames from "classnames";
import { FC } from "react";

interface Props {
  children: string;
  className?: string;
}

const ItemTitle: FC<Props> = ({ children, className }) => {
  return (
    <h3
      className={classNames(
        "mt-1 pl-1 text-xs md:text-base opacity-75 text-ellipsis whitespace-nowrap overflow-hidden line-clamp-1",
        className
      )}
    >
      {children}
    </h3>
  );
};

export default ItemTitle;
