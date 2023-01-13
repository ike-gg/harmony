import { FC } from "react";

interface Props {
  children: string;
}

const SidebarSubTitle: FC<Props> = ({ children }) => {
  return <h3 className="">{children}</h3>;
};

export default SidebarSubTitle;
