import { FC } from "react";
import SlidingText from "../../../UI/SlidingText";

interface Props {
  children: string;
}

const DescTitle: FC<Props> = ({ children }) => {
  return (
    <h1 className="text-3xl md:text-5xl font-semibold ">
      <SlidingText delay={0.2} duration={0.4}>
        {children}
      </SlidingText>
    </h1>
  );
};

export default DescTitle;
