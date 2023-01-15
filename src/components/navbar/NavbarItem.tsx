import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { IconName } from "../../types/Icons";
import Icon from "../UI/Icon";

interface Props {
  to: string;
  iconName: IconName;
  name: string;
  end?: boolean;
  children?: ReactNode;
}

const NavbarItem: FC<Props> = ({
  to,
  iconName,
  name,
  end = false,
  children,
}) => {
  // const baseClasses =
  //   "bg-white/80 opacity-70 text-neutral-400 border shadow-inner hover:opacity-100 cursor-pointer rounded-md";
  // const activeClasses =
  //   "bg-primary/25 opacity-100 text-primary/75 border border-primary/20 shadow-inner hover:opacity-100 cursor-pointer rounded-md";
  const baseClasses =
    "bg-white/100 text-neutral-500 cursor-pointer rounded-md hover:bg-gray-100 hover:shadow-inner";
  const activeClasses = "bg-black text-white cursor-pointer rounded-md";

  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => (isActive ? activeClasses : baseClasses)}
    >
      <div className="flex flex-row justify-center items-center flex-nowrap h-12 p-3 gap-2">
        <Icon className="text-xl" iconName={iconName} />
        <span className="capitalize translate-y-[0.5px]">{name}</span>
        {children}
      </div>
    </NavLink>
  );
};

export default NavbarItem;
