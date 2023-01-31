import classNames from "classnames";
import { FC } from "react";
import { Link } from "react-router-dom";
import Artwork from "../music/Artwork";
import ItemName from "../music/common/ItemName";
import ItemTitle from "../music/common/ItemTitle";

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
    <Link to={detailsPage} className="flex flex-col">
      <Artwork
        artworkUrl={artworkUrl}
        size="small"
        className={classNames("shrink-0", { "rounded-full": roundedFull })}
      />
      <ItemTitle>{title}</ItemTitle>
      <ItemName>{name}</ItemName>
    </Link>
  );
};

export default LibraryItem;
