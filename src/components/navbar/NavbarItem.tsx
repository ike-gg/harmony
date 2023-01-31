import classNames from "classnames";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { IconName } from "../../types/Icons";
import Icon from "../UI/Icon";

interface Props {
  to: string;
  iconName: IconName;
  name: string;
  end?: boolean;
  className?: string;
}

const NavbarItem: FC<Props> = (props) => {
  const { to, iconName, name, end = false, className } = props;
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        classNames(
          "cursor-pointer rounded-md",
          "flex flex-col items-center px-4 py-2",
          "md:flex-row md:gap-3",
          className,
          {
            "bg-black text-white": isActive,
            "hover:bg-neutral-100 hover:shadow-inner text-neutral-400":
              !isActive,
          }
        )
      }
    >
      <Icon className="text-lg md:text-xl" iconName={iconName} />
      <span className="capitalize translate-y-[0.5px] text-xs md:text-base">
        {name}
      </span>
    </NavLink>
  );
};

export default NavbarItem;
