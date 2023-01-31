import { FC } from "react";
import getArtworkUrl, { Size } from "../../utils/getArtworkUrl";

interface Props {
  artworkUrl: string;
  size: Size;
  className?: string;
}

const Artwork: FC<Props> = ({ artworkUrl, size = "medium", className }) => {
  const url = getArtworkUrl(artworkUrl, size);

  return (
    <img
      className={`rounded-md shadow-lg aspect-square ${className}`}
      src={url}
      alt="album artwork"
    />
  );
};

export default Artwork;
