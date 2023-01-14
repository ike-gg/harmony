import { FC } from "react";

interface Props {
  children: string;
}

const SubHeading: FC<Props> = ({ children }) => {
  return (
    <h2 className="text-3xl font-semibold pl-4 text-neutral-600">{children}</h2>
  );
};

export default SubHeading;
