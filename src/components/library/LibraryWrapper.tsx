import classNames from "classnames";
import { FC } from "react";
import SubHeading from "../UI/Headings/SubHeading";

interface Props {
  children: JSX.Element | JSX.Element[];
  title: string;
  cols?: number;
}

const LibraryWrapper: FC<Props> = ({ children, title, cols }) => {
  return (
    <section className="flex flex-col gap-3">
      <SubHeading>{title}</SubHeading>
      <div
        className={classNames("grid grid-cols-3 md:grid-cols-5 gap-4", {
          "grid-cols-4 md:grid-cols-7 gap-1 md:gap-3": cols === 7,
        })}
      >
        {children}
      </div>
    </section>
  );
};

export default LibraryWrapper;
