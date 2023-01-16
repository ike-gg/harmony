import Skeleton from "@yisheng90/react-loading";
import { FC } from "react";
import { Link } from "react-router-dom";
import { AlbumAttributes } from "../../../types/api/Album";
import { SongAttributes } from "../../../types/api/Song";
import Artwork from "../Artwork";

interface Props {
  type: "loaded";
  id: string;
  attributes: SongAttributes;
}

interface SkeletonProps {
  type: "notloaded";
}

const SongItem: FC<Props | SkeletonProps> = (props) => {
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
  const { artwork, name, artistName } = attributes;
  const { url: artworkUrl } = artwork;

  const detailsPage = `song/${id}`;

  return (
    <div>
      <Link to={detailsPage} className="flex flex-row w-52 gap-1 snap-center">
        <Artwork artworkUrl={artworkUrl} size="xsmall" />
        <div className="flex flex-col pt-1">
          <h3 className="mt-1 pl-1 font-medium text-neutral-700 text-base whitespace-pre-wrap leading-4 text-ellipsis line-clamp-3">
            {name}
          </h3>
          <p className="pl-1 text-xs text-neutral-400 line-clamp-2">
            {artistName}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SongItem;
