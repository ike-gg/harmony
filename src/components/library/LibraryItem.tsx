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
      <ItemTitle
        className={classNames("text-xs md:text-sm", {
          "text-center": roundedFull,
        })}
      >
        {title}
      </ItemTitle>
      <ItemName
        className={classNames("text-xxs md:text-xs", {
          "text-center": roundedFull,
        })}
      >
        {name}
      </ItemName>
    </Link>
  );
};

export default LibraryItem;
