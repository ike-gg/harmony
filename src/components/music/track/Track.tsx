import classNames from "classnames";
import { FC } from "react";
import { useSelector } from "react-redux";
import { PlayerActions } from "../../../store/playerSlice";
import { RootState, useAppDispatch } from "../../../store/store";
import { Artwork as ArtworkType } from "../../../types/api/Common";
import { SongAttributes } from "../../../types/api/Song";
import parseArtwork from "../../../utils/parseArtwork";
import Artwork from "../Artwork";
import TrackDetails from "./TrackDetails";
import TrackIndex from "./TrackIndex";
import TrackLibrary from "./TrackLibrary";
import TrackName from "./TrackName";
import TrackUnreleased from "./TrackUnreleased";

interface Props {
  songId: string;
  index: number;
  title: string;
  name?: string;
  attributes: SongAttributes;
  isUnreleased?: boolean;
  cover?: boolean;
}

const Track: FC<Props> = (props) => {
  const { attributes, index, songId, title, cover, isUnreleased, name } = props;
  const { artwork } = attributes;

  const currentId = useSelector((state: RootState) => state.player.id);
  const dispatch = useAppDispatch();

  const detailsPage = `/song/${songId}`;

  const playTrack = () => {
    dispatch(PlayerActions.setSong(songId));
  };

  const isCurrentlyPlaying = currentId === songId;

  const itemTheme = parseArtwork(artwork);

  const activeSong: React.CSSProperties = {
    background: itemTheme.bgColor,
    color: itemTheme.primaryColor,
    borderRadius: "0.5rem",
    opacity: 1,
  };

  return (
    <li
      style={isCurrentlyPlaying ? activeSong : {}}
      onClick={isUnreleased ? undefined : playTrack}
      className={classNames(
        "first:border-t-0 flex gap-3 items-center border-t border-neutral-200 p-2 relative opacity-70",
        {
          "hover:bg-neutral-100 hover:cursor-pointer hover:opacity-100":
            !isUnreleased,
          "py-3": !cover,
        }
      )}
    >
      <TrackIndex>{index}</TrackIndex>
      {cover && (
        <Artwork artworkUrl={artwork.url} size="icon" className="min-w-max" />
      )}
      <TrackName title={title} name={name} />
      {isUnreleased && <TrackUnreleased />}
      <div className="flex gap-3 ml-auto text-2xl pr-2">
        <TrackLibrary id={songId} attributes={attributes} />
        <TrackDetails detailsPage={detailsPage} />
      </div>
    </li>
  );
};

export default Track;
