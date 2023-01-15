import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const HorizontalWrapper: FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-flow-col overflow-x-scroll gap-3 pb-4 snap-mandatory snap-x">
      {children}
    </div>
  );
};

export default HorizontalWrapper;
