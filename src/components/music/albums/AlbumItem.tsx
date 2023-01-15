import { FC } from "react";
import { Link } from "react-router-dom";
import Artwork from "../Artwork";

interface Props {
  artwork: string;
  name: string;
  author: string;
  to: string;
}

const AlbumItem: FC<Props> = ({ artwork, author, name, to }) => {
  return (
    <Link to={to} className="inline-flex flex-col w-44 snap-center">
      <Artwork artworkUrl={artwork} size="small" />
      <h3 className="mt-1 pl-1 font-medium text-neutral-700 text-base text-ellipsis whitespace-nowrap overflow-hidden">
        {name}
      </h3>
      <p className="pl-1 text-xs text-neutral-400">{author}</p>
    </Link>
  );
};

export default AlbumItem;
