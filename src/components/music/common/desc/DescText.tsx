import { CSSProperties, FC } from "react";
import SlidingText from "../../../UI/SlidingText";

interface Props {
  children: string;
}

const DescText: FC<Props> = ({ children }) => {
  return (
    <p className="font-normal opacity-50 line-clamp-1">
      <SlidingText delay={0.4} duration={0.5}>
        {children}
      </SlidingText>
    </p>
  );
};

export default DescText;
