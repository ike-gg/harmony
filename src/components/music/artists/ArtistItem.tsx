import { FC } from "react";
import { Link } from "react-router-dom";
import { ArtistAttributes } from "../../../types/api/Artist";
import Artwork from "../Artwork";

interface Props {
  attributes: ArtistAttributes;
  id: string;
}

const ArtistItem: FC<Props> = ({ attributes, id }) => {
  const { artwork, name } = attributes;

  if (!artwork) return null;

  const detailsPage = `/artist/${id}`;

  return (
    <Link to={detailsPage}>
      <div className="flex flex-col gap-3 w-28 md:w-36">
        <Artwork
          artworkUrl={artwork.url}
          size="medium"
          className="rounded-full"
        />
        <h4 className="text-center text-base text-neutral-600">{name}</h4>
      </div>
    </Link>
  );
};

export default ArtistItem;
