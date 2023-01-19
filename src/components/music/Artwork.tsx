import { FC } from "react";
import getArtworkUrl, { Size } from "../../utils/getArtworkUrl";

interface Props {
  artworkUrl: string;
  size: Size;
  blurredShadow?: boolean;
  className?: string;
}

const Artwork: FC<Props> = ({
  artworkUrl,
  size = "medium",
  blurredShadow,
  className,
}) => {
  const url = getArtworkUrl(artworkUrl, size);

  return (
    <span className="relative flex items-center">
      {blurredShadow && (
        <img
          className="absolute -z-50 scale-100 -translate-y-1/5 blur-sm"
          src={url}
        />
      )}
      <img
        className={`rounded-md shadow-lg aspect-square ${className}`}
        src={url}
        alt="album artwork"
      />
    </span>
  );
};

export default Artwork;
