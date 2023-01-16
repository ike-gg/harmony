import { FC } from "react";
import getArtworkUrl, { Size } from "../../utils/getArtworkUrl";

interface Props {
  artworkUrl: string;
  size: Size;
}

const Artwork: FC<Props> = ({ artworkUrl, size = "medium" }) => {
  const url = getArtworkUrl(artworkUrl, size);

  return (
    <img
      className="rounded-md aspect-square shadow-lg"
      src={url}
      alt="album artwork"
    ></img>
  );
};

export default Artwork;
