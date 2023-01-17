import Skeleton from "@yisheng90/react-loading";
import { FC } from "react";
import { Link } from "react-router-dom";
import { AlbumAttributes } from "../../../types/api/Album";
import { SongAttributes } from "../../../types/api/Song";
import SharedPlayButton from "../../player/SharedPlayButton";
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
      <div className="flex flex-row gap-1 w-52 snap-start">
        <Skeleton width="6rem" height="6rem" />
        <div className="flex flex-col pt-1 w-24">
          <Skeleton width="100%" height="1.2rem" rows={2} />
          <Skeleton width="100%" height="0.5rem" rows={2} />
        </div>
      </div>
    );
  }

  const { attributes, id } = props;
  const { artwork, name, artistName } = attributes;
  const { url: artworkUrl } = artwork;

  const detailsPage = `song/${id}`;

  return (
    <div className="relative">
      <Link to={detailsPage} className="flex flex-row w-52 gap-1 snap-start">
        <Artwork artworkUrl={artworkUrl} size="extrasmall" />
        <div className="flex flex-col pt-1">
          <h3 className="mt-1 pl-1 font-medium text-neutral-700 text-base whitespace-pre-wrap leading-4 text-ellipsis line-clamp-2">
            {name}
          </h3>
          <p className="pl-1 text-xs text-neutral-400 line-clamp-2">
            {artistName}
          </p>
        </div>
      </Link>
      <SharedPlayButton song={attributes} />
    </div>
  );
};

export default SongItem;
