import Skeleton from "@yisheng90/react-loading";
import { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";
import { PlaylistAttributes } from "../../../types/api/Playlist";
import parseArtwork from "../../../utils/parseArtwork";
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

  const itemTheme = parseArtwork(artwork);

  const backgroundStyle: CSSProperties = {
    backgroundImage: `radial-gradient(circle at top, ${
      itemTheme.bgColor
    } 50%, ${itemTheme.addAlpha(itemTheme.bgColor, 0.85)})`,
  };
  const primaryStyle: CSSProperties = { color: itemTheme.primaryColor };
  const secondaryStyle: CSSProperties = { color: itemTheme.secondaryColor };

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
          style={backgroundStyle}
          className="text-center p-4 rounded-b-md flex flex-col justify-center h-20"
        >
          <h3
            style={primaryStyle}
            className="font-semibold text-lg line-clamp-1"
          >
            {name}
          </h3>
          <p style={secondaryStyle} className="line-clamp-1">
            {curatorName}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PlaylistItem;
