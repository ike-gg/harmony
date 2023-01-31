import classNames from "classnames";
import { FC, MouseEventHandler } from "react";
import { IconName } from "../../types/Icons";
import Icon from "./Icon";

interface Props {
  children: string;
  icon?: IconName;
  className?: string;
  theme?: "black" | "white" | "danger";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<Props> = ({
  children,
  icon,
  className,
  onClick,
  theme = "black",
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        className,
        "px-3 py-1 inline-block rounded-md text-base md:text-base border border-transparent",
        {
          "bg-black text-white/90": theme === "black",
          "bg-white text-black border-neutral-100": theme === "white",
          "bg-red-500 text-white": theme === "danger",
        }
      )}
    >
      {children} {icon && <Icon iconName={icon} />}
    </button>
  );
};

export default Button;
