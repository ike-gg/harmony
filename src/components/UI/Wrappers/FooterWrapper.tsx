import { FC } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const FooterWrapper: FC<Props> = ({ children }) => {
  return (
    <footer className="bg-neutral-100 p-8 rounded-2xl border border-neutral-200/50">
      {children}
    </footer>
  );
};

export default FooterWrapper;
