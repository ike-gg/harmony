import classNames from "classnames";
import { FC } from "react";

interface Props {
  children: string;
  className?: string;
}

const ItemName: FC<Props> = ({ children, className }) => {
  return (
    <p
      className={classNames(
        "pl-1 text-xxs md:text-xs opacity-40 line-clamp-1",
        className
      )}
    >
      {children}
    </p>
  );
};

export default ItemName;
