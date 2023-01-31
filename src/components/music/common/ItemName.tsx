import classNames from "classnames";
import { FC } from "react";

interface Props {
  children: string;
  className?: string;
  spaced?: boolean;
}

const ItemName: FC<Props> = ({ children, className, spaced = true }) => {
  return (
    <p
      className={classNames(
        "text-xxs md:text-xs opacity-40 line-clamp-1",
        className,
        { "pl-1": spaced }
      )}
    >
      {children}
    </p>
  );
};

export default ItemName;
