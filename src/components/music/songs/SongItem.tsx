import Skeleton from "@yisheng90/react-loading";
import { CSSProperties, FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../store/store";
import { SongAttributes } from "../../../types/api/Song";
import parseArtwork from "../../../utils/parseArtwork";
import SharedMiniPlayButton from "../../player/SharedMiniPlayButton";
import Artwork from "../Artwork";
import ItemName from "../common/ItemName";
import ItemTitle from "../common/ItemTitle";

interface Props {
  type: "loaded";
  id: string;
  attributes: SongAttributes;
}

interface SkeletonProps {
  type: "notloaded";
}

const SongItem: FC<Props | SkeletonProps> = (props) => {
  if (props.type === "notloaded") {
    return (
      <div className="flex flex-row gap-5 w-56 snap-start">
        <Skeleton width="6rem" height="6rem" />
        <div className="flex flex-col pt-1 w-24">
          <Skeleton width="100%" height="1.2rem" rows={2} />
          <Skeleton width="100%" height="0.5rem" rows={2} />
        </div>
      </div>
    );
  }

  const player = useSelector((state: RootState) => state.player);

  const { attributes, id } = props;
  const { artwork, name, artistName } = attributes;
  const { url: artworkUrl } = artwork;

  let isCurrentPlaying: boolean = false;
  if (player.id) isCurrentPlaying = player.id === id;

  const detailsPage = `/song/${id}`;

  const { bgColor, primaryColor } = parseArtwork(artwork);

  const styles: CSSProperties = {
    background: bgColor,
    color: primaryColor,
  };

  return (
    <div className="relative rounded-md" style={isCurrentPlaying ? styles : {}}>
      <Link to={detailsPage} className="flex flex-row w-56 gap-2 snap-start">
        <Artwork artworkUrl={artworkUrl} size="extrasmall" />
        <div className="flex flex-col pt-2 pr-">
          <ItemTitle className="line-clamp-1" spaced={false}>
            {name}
          </ItemTitle>
          <ItemName className="line-clamp-2" spaced={false}>
            {artistName}
          </ItemName>
        </div>
      </Link>
      <SharedMiniPlayButton id={id} />
    </div>
  );
};

export default SongItem;
