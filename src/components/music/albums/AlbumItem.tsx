import Skeleton from "@yisheng90/react-loading";
import classNames from "classnames";
import { FC } from "react";
import { Link } from "react-router-dom";
import { AlbumAttributes } from "../../../types/api/Album";
import Artwork from "../Artwork";

interface Props {
  type: "loaded";
  id: string;
  attributes: AlbumAttributes;
  className?: string;
}

interface SkeletonProps {
  type: "notloaded";
}

const AlbumItem: FC<Props | SkeletonProps> = (props) => {
  if (props.type === "notloaded") {
    return (
      <div className="flex flex-col gap-1 w-44 snap-start">
        <Skeleton width="11rem" height="11rem" />
        <Skeleton width="100%" height="1.2rem" />
        <Skeleton width="100%" height="0.5rem" />
      </div>
    );
  }

  const { attributes, id, className } = props;
  const { artwork, name, artistName } = attributes;
  const { url: artworkUrl } = artwork;

  const detailsPage = `/album/${id}`;

  return (
    <Link
      to={detailsPage}
      className={classNames("flex flex-col w-44 snap-start", className)}
    >
      <Artwork artworkUrl={artworkUrl} size="small" className="w-full" />
      <h3 className="mt-1 pl-1 font-medium text-neutral-700 text-base text-ellipsis whitespace-nowrap overflow-hidden">
        {name}
      </h3>
      <p className="pl-1 text-xs text-neutral-400">{artistName}</p>
    </Link>
  );
};

export default AlbumItem;
