import Skeleton from "@yisheng90/react-loading";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  isLoading?: boolean;
}

const SubHeading: FC<Props> = ({ children, isLoading }) => {
  if (isLoading) {
    return <Skeleton height="1.875rem" width="100%" />;
  }

  return (
    <h2 className="text-3xl font-semibold text-neutral-600 block">
      {children}
    </h2>
  );
};

export default SubHeading;
