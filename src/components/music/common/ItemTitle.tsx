import classNames from "classnames";
import { FC } from "react";

interface Props {
  children: string;
  className?: string;
  spaced?: boolean;
}

const ItemTitle: FC<Props> = ({ children, className, spaced = true }) => {
  return (
    <h3
      className={classNames(
        "text-sm md:text-base font-medium opacity-75 text-ellipsis leading-tight md:leading-tight overflow-hidden line-clamp-1",
        className,
        { "mt-1 pl-1": spaced }
      )}
    >
      {children}
    </h3>
  );
};

export default ItemTitle;
