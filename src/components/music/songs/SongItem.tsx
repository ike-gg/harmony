import Skeleton from "@yisheng90/react-loading";
import classNames from "classnames";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../store/store";
import { SongAttributes } from "../../../types/api/Song";
import SharedPlayButton from "../../player/SharedPlayButton";
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

  const detailsPage = `song/${id}`;

  return (
    <div
      style={
        isCurrentPlaying
          ? {
              backgroundImage: `linear-gradient(to bottom, #${artwork.bgColor}33, transparent)`,
            }
          : {}
      }
      className={classNames("relative", {
        "from-neutral-100/10 to-black/10 bg-gradient-to-t rounded-md":
          isCurrentPlaying,
      })}
    >
      <Link
        to={detailsPage}
        className="flex flex-row w-56 gap-2 snap-start p-2"
      >
        <Artwork artworkUrl={artworkUrl} size="extrasmall" />
        <div className="flex flex-col pt-1 basis-0 grow">
          <h3 className="font-medium text-neutral-700 text-base leading-[1.2rem] line-clamp-2">
            {name}
          </h3>
          <p className="text-xs text-neutral-400 line-clamp-2">{artistName}</p>
        </div>
      </Link>
      <SharedPlayButton song={attributes} id={id} />
    </div>
  );
};

export default SongItem;
