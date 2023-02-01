import { FC } from "react";

interface Props {
  title: string;
  name?: string;
}

const TrackName: FC<Props> = ({ title, name }) => {
  return (
    <div className="flex flex-col">
      <span className="line-clamp-1 text-sm md:text-base">{title}</span>
      {name && (
        <span className="line-clamp-1 text-xs md:text-sm opacity-50">
          {name}
        </span>
      )}
    </div>
  );
};

export default TrackName;
