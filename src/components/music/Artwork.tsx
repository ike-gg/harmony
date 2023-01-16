import { FC } from "react";
import getArtworkUrl from "../../utils/artworkUrl";

interface Props {
  artworkUrl: string;
  size: "xsmall" | "small" | "medium" | "large";
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
