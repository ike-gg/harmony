import { FC } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const FooterWrapper: FC<Props> = ({ children }) => {
  return (
    <footer className="bg-neutral-100 p-5 md:p-8 rounded-2xl border border-neutral-200/50 flex flex-col gap-8">
      {children}
    </footer>
  );
};

export default FooterWrapper;
