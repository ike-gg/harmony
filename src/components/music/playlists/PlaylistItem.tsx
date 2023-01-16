import Skeleton from "@yisheng90/react-loading";
import { FC } from "react";
import { Link } from "react-router-dom";
import { AlbumAttributes } from "../../../types/api/Album";
import { PlaylistAttributes } from "../../../types/api/Playlist";
import Artwork from "../Artwork";

interface Props {
  type: "loaded";
  id: string;
  attributes: PlaylistAttributes;
}

interface SkeletonProps {
  type: "notloaded";
}

const PlaylistItem: FC<Props | SkeletonProps> = (props) => {
  if (props.type === "notloaded") {
    return (
      <div className="flex flex-col gap-1 w-44 snap-center">
        <Skeleton width="11rem" height="11rem" />
        <Skeleton width="100%" height="1.2rem" />
        <Skeleton width="100%" height="0.5rem" />
      </div>
    );
  }

  const { attributes, id } = props;
  const { artwork, name, curatorName } = attributes;
  const { url: artworkUrl } = artwork;

  const detailsPage = `album/${id}`;

  return (
    <div>
      <Link to={detailsPage} className="flex flex-col w-44 snap-center">
        <Artwork artworkUrl={artworkUrl} size="small" />
        <h3 className="mt-1 pl-1 font-medium text-neutral-700 text-base text-ellipsis whitespace-nowrap overflow-hidden">
          {name}
        </h3>
        <p className="pl-1 text-xs text-neutral-400">by {curatorName}</p>
      </Link>
    </div>
  );
};

export default PlaylistItem;
