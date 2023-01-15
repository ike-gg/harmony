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

const NavbarItem: FC<Props> = ({
  to,
  iconName,
  name,
  end = false,
  className,
}) => {
  const baseClasses =
    "bg-white/100 text-neutral-500 cursor-pointer rounded-md hover:bg-gray-100 hover:shadow-inner";
  const activeClasses =
    "bg-black text-white cursor-pointer rounded-md grow md:grow-0";

  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        (isActive ? activeClasses : baseClasses) + " " + className
      }
    >
      <div className="flex flex-row justify-center items-center flex-nowrap h-12 p-3 gap-2">
        <Icon className="text-xl" iconName={iconName} />
        <span className="capitalize translate-y-[0.5px]">{name}</span>
      </div>
    </NavLink>
  );
};

export default NavbarItem;
