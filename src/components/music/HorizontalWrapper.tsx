import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const HorizontalWrapper: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default HorizontalWrapper;
