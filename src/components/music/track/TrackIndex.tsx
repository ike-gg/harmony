import { FC } from "react";

interface Props {
  children: string | number;
}

const TrackIndex: FC<Props> = ({ children }) => {
  return (
    <span className="opacity-50 min-w-[1.4rem] text-center">
      {String(children)}
    </span>
  );
};

export default TrackIndex;
