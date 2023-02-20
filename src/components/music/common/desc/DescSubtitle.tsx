import { CSSProperties, FC } from "react";
import SlidingText from "../../../UI/SlidingText";

interface Props {
  children: string;
}

const DescSubtitle: FC<Props> = ({ children }) => {
  return (
    <span className="uppercase font-semibold tracking-wider opacity-60 text-xs md:text-sm">
      <SlidingText>{children}</SlidingText>
    </span>
  );
};

export default DescSubtitle;
