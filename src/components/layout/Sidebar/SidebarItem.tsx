import { FC } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  name: string;
}

const SidebarItem: FC<Props> = ({ name }) => {
  const lowercaseName = name.toLowerCase();
  return <NavLink to={lowercaseName}>{name}</NavLink>;
};

export default SidebarItem;
