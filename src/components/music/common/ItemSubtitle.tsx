import classNames from "classnames";
import { FC } from "react";

interface Props {
  children: string;
  className?: string;
}

const ItemSubtitle: FC<Props> = ({ children, className }) => {
  return (
    <p
      className={classNames(
        "md:mt-1 text-xxs md:text-xs uppercase opacity-50 font-medium tracking-wide",
        className
      )}
    >
      {children}
    </p>
  );
};

export default ItemSubtitle;
