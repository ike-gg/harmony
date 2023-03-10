import { FC } from "react";

interface Props {
  children: string;
}

const MainHeading: FC<Props> = ({ children }) => {
  return (
    <h1 className="text-5xl font-semibold pl-2 text-neutral-700">{children}</h1>
  );
};

export default MainHeading;
