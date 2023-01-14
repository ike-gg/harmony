import { FC } from "react";

interface Props {
  children: string;
}

const Paragraph: FC<Props> = ({ children }) => {
  return (
    <p className="pl-2 text-base font-normal text-neutral-400 leading-5">
      {children}
    </p>
  );
};

export default Paragraph;
