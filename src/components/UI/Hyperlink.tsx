import classNames from "classnames";
import { FC } from "react";
import { IconName } from "../../types/Icons";
import Icon from "./Icon";

interface Props {
  href: string;
  children: string;
  icon?: IconName;
  target?: "_blank";
  className?: string;
}

const Hyperlink: FC<Props> = ({ href, children, target, icon, className }) => {
  return (
    <a
      className={classNames(
        className,
        "bg-black px-3 py-1 inline-block rounded-md text-sm md:text-base text-white/90"
      )}
      href={href}
      target={target}
    >
      {children} {icon && <Icon iconName={icon} />}
    </a>
  );
};

export default Hyperlink;
