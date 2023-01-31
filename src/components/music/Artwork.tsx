import classNames from "classnames";
import { FC } from "react";
import getArtworkUrl, { Size } from "../../utils/getArtworkUrl";

interface Props {
  artworkUrl: string;
  size: Size;
  isTrack?: boolean;
  className?: string;
}

const Artwork: FC<Props> = ({
  artworkUrl,
  size = "medium",
  className,
  isTrack,
}) => {
  const url = getArtworkUrl(artworkUrl, size);

  return (
    <span
      className={classNames("relative flex items-center", {
        "min-w-max": isTrack,
      })}
    >
      <img
        className={`rounded-md shadow-lg aspect-square ${className}`}
        src={url}
        alt="album artwork"
      />
    </span>
  );
};

export default Artwork;
