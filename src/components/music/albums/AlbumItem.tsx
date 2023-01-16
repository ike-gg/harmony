import Skeleton from "@yisheng90/react-loading";
import { FC } from "react";
import { Link } from "react-router-dom";
import Artwork from "../Artwork";

interface Props {
  type: "loaded";
  artwork: string;
  name: string;
  author: string;
  to: string;
}

interface SkeletonProps {
  type: "notloaded";
}

const AlbumItem: FC<Props | SkeletonProps> = (props) => {
  if (props.type === "notloaded") {
    return (
      <div className="flex flex-col gap-1 w-44 snap-center">
        <Skeleton width="11rem" height="11rem" />
        <Skeleton width="100%" height="1.2rem" />
        <Skeleton width="100%" height="0.5rem" />
      </div>
    );
  }

  const { artwork, author, name, to } = props;

  return (
    <div>
      <Link to={to} className="flex flex-col w-44 snap-center">
        <Artwork artworkUrl={artwork} size="small" />
        <h3 className="mt-1 pl-1 font-medium text-neutral-700 text-base text-ellipsis whitespace-nowrap overflow-hidden">
          {name}
        </h3>
        <p className="pl-1 text-xs text-neutral-400">{author}</p>
      </Link>
    </div>
  );
};

export default AlbumItem;
