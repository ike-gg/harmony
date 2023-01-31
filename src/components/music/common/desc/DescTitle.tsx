import { CSSProperties, FC } from "react";

interface Props {
  children: string;
}

const DescTitle: FC<Props> = ({ children }) => {
  return (
    <h1 className="text-3xl md:text-5xl font-semibold pb-1 line-clamp-1">
      {children}
    </h1>
  );
};

export default DescTitle;
