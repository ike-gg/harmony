import { FC } from "react";
import SubHeading from "../UI/Headings/SubHeading";

interface Props {
  children: JSX.Element | JSX.Element[];
  title: string;
}

const LibraryWrapper: FC<Props> = ({ children, title }) => {
  return (
    <section className="flex flex-col gap-3">
      <SubHeading>{title}</SubHeading>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4">{children}</div>
    </section>
  );
};

export default LibraryWrapper;
