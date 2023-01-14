import { FC } from "react";
import { IconName } from "../../types/Icons";

interface Props {
  iconName: IconName;
  className?: string;
}

const Icon: FC<Props> = ({ iconName, className }) => {
  return <i className={`uil uil-${iconName} ${className}`} />;
};

export default Icon;
