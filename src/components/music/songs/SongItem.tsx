import Skeleton from "@yisheng90/react-loading";
import { CSSProperties, FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../store/store";
import { SongAttributes } from "../../../types/api/Song";
import parseArtwork from "../../../utils/parseArtwork";
import SharedMiniPlayButton from "../../player/SharedMiniPlayButton";
import Artwork from "../Artwork";

interface Props {
  type: "loaded";
  id: string;
  attributes: SongAttributes;
}

interface SkeletonProps {
  type: "notloaded";
}

const SongItem: FC<Props | SkeletonProps> = (props) => {
  const player = useSelector((state: RootState) => state.player);
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

  const { attributes, id } = props;
  const { artwork, name, artistName } = attributes;
  const { url: artworkUrl } = artwork;

  let isCurrentPlaying: boolean = false;
  if (player.id) isCurrentPlaying = player.id === id;

  const detailsPage = `/song/${id}`;

  const itemTheme = parseArtwork(artwork);
  const styles: CSSProperties = {
    background: itemTheme.bgColor,
    color: itemTheme.primaryColor,
  };

  return (
    <div className="relative rounded-md" style={isCurrentPlaying ? styles : {}}>
      <Link to={detailsPage} className="flex flex-row w-56 gap-2 snap-start">
        <Artwork artworkUrl={artworkUrl} size="extrasmall" />
        <div className="flex flex-col pt-2 pr-2 basis-0 grow">
          <h3 className="font-medium text-base leading-[1.2rem] line-clamp-2">
            {name}
          </h3>
          <p className="text-xs line-clamp-2 opacity-70">{artistName}</p>
        </div>
      </Link>
      <SharedMiniPlayButton id={id} />
    </div>
  );
};

export default SongItem;
