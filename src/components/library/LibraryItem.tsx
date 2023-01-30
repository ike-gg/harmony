import classNames from "classnames";
import { FC } from "react";
import { Link } from "react-router-dom";
import Artwork from "../music/Artwork";

interface Props {
  artworkUrl: string;
  title: string;
  name: string;
  detailsPage: string;
  roundedFull?: boolean;
}

const LibraryItem: FC<Props> = ({
  artworkUrl,
  name,
  title,
  detailsPage,
  roundedFull = false,
}) => {
  return (
    <Link to={detailsPage}>
      <Artwork
        artworkUrl={artworkUrl}
        size="small"
        className={classNames("w-full", { "rounded-full": roundedFull })}
      />
      <h2 className="mt-1 text-sm md:text-base text-neutral-800 font-medium line-clamp-1">
        {title}
      </h2>
      <p className="text-xs md:text-xs text-neutral-500 line-clamp-1">{name}</p>
    </Link>
  );
};

export default LibraryItem;
