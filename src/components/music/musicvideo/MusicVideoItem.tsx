import Skeleton from "@yisheng90/react-loading";
import { FC } from "react";
import { Link } from "react-router-dom";
import { MusicVideoAttributes } from "../../../types/api/MusicVideo";
import Artwork from "../Artwork";
import ItemName from "../common/ItemName";
import ItemTitle from "../common/ItemTitle";

interface Props {
  type: "loaded";
  id: string;
  attributes: MusicVideoAttributes;
}

interface SkeletonProps {
  type: "notloaded";
}

const MusicVideoItem: FC<Props | SkeletonProps> = (props) => {
  if (props.type === "notloaded") {
    return (
      <div className="flex flex-col gap-1 w-64 snap-start">
        <Skeleton width="100%" height="8.8rem" />
        <Skeleton width="100%" height="1.2rem" />
        <Skeleton width="100%" height="0.5rem" />
      </div>
    );
  }

  const { attributes, id } = props;
  const { artwork, name, artistName } = attributes;
  const { url: artworkUrl } = artwork;

  const detailsPage = `/musicvideo/${id}`;

  return (
    <div>
      <Link to={detailsPage} className="flex flex-col w-64 snap-start">
        <Artwork artworkUrl={artworkUrl} size="small" className="aspect-auto" />
        <ItemTitle>{name}</ItemTitle>
        <ItemName>{artistName}</ItemName>
      </Link>
    </div>
  );
};

export default MusicVideoItem;
