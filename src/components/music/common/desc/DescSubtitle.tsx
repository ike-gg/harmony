import { CSSProperties, FC } from "react";

interface Props {
  children: string;
}

const DescSubtitle: FC<Props> = ({ children }) => {
  return (
    <span className="uppercase font-semibold tracking-wider opacity-60 text-xs md:text-sm">
      {children}
    </span>
  );
};

export default DescSubtitle;
