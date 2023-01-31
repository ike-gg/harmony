import { CSSProperties, FC } from "react";

interface Props {
  children: string;
}

const ItemText: FC<Props> = ({ children }) => {
  return <p className="font-normal pb-1 opacity-50 line-clamp-1">{children}</p>;
};

export default ItemText;
