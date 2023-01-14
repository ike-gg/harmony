import { FC } from "react";
import { NavLink } from "react-router-dom";
import { IconName } from "../../types/Icons";
import Icon from "../UI/Icon";

interface Props {
  to: string;
  iconName: IconName;
  end?: boolean;
}

const NavbarItem: FC<Props> = ({ to, iconName, end = false }) => {
  const baseClasses =
    "bg-white/80 opacity-70 text-gray-400 border shadow-inner hover:opacity-100 cursor-pointer rounded-md";
  const activeClasses =
    "bg-primary/25 opacity-100 text-primary/75 border border-primary/20 shadow-inner hover:opacity-100 cursor-pointer rounded-md";

  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => (isActive ? activeClasses : baseClasses)}
    >
      <div className="flex justify-center items-center w-12 h-12">
        <Icon className="text-2xl" iconName={iconName} />
      </div>
    </NavLink>
  );
};

export default NavbarItem;
