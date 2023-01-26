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
      <div className="flex flex-col gap-1 w-52 snap-start">
        <Skeleton width="100%" height="14rem" />
        <Skeleton width="100%" height="1.2rem" />
        <Skeleton width="100%" height="0.5rem" />
      </div>
    );
  }

  const { attributes, id: fullId } = props;
  const { artwork, name, curatorName } = attributes;
  const { url: artworkUrl } = artwork;

  const id = fullId.replace(".", "dot");

  const detailsPage = `/playlist/${id}`;

  return (
    <div>
      <Link
        to={detailsPage}
        className="flex flex-col w-52 snap-start shadow-lg"
      >
        <Artwork
          artworkUrl={artworkUrl}
          size="small"
          className="rounded-b-none shadow-none"
        />
        <div
          style={{
            backgroundImage: `radial-gradient(circle at top, #${artwork.bgColor} 50%, #${artwork.bgColor}DD)`,
          }}
          className="text-center p-4 rounded-b-md flex flex-col justify-center gap-1 h-24"
        >
          <h3
            style={{ color: `#${artwork.textColor1}` }}
            className="font-semibold text-lg line-clamp-1"
          >
            {name}
          </h3>
          <p
            style={{ color: `#${artwork.textColor4}` }}
            className="line-clamp-1"
          >
            {curatorName}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PlaylistItem;
