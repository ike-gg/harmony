import { FC, MouseEventHandler } from "react";
import { IconName } from "../../types/Icons";

interface Props {
  iconName: IconName;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
}

const Icon: FC<Props> = ({ iconName, className, onClick }) => {
  let interactiveClasses: string = "";
  if (onClick)
    interactiveClasses = "opacity-70 hover:opacity-100 cursor-pointer";
  return (
    <i
      onClick={onClick}
      className={`uil uil-${iconName} ${className} ${interactiveClasses}`}
    />
  );
};

export default Icon;
