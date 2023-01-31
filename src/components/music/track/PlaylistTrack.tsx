import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PlayerActions } from "../../../store/playerSlice";
import { RootState, useAppDispatch } from "../../../store/store";
import { SongAttributes } from "../../../types/api/Song";
import parseArtwork from "../../../utils/parseArtwork";
import removeParentheses from "../../../utils/removeParentheses";
import Icon from "../../UI/Icon";
import Artwork from "../Artwork";

interface Props {
  track: {
    id: string;
    type: "songs";
    attributes: SongAttributes;
  };
  index: number;
  artwork?: boolean;
}

const Track: FC<Props> = ({ track, artwork: withArtwork = false, index }) => {
  const currentId = useSelector((state: RootState) => state.player.id);
  const dispatch = useAppDispatch();

  const { attributes, id } = track;
  const { name: fullName, artwork, artistName } = attributes;

  const name = removeParentheses(fullName);

  const detailsPage = `/song/${id}`;

  const playTrack = () => {
    dispatch(PlayerActions.setSong(id));
  };

  const isCurrentlyPlaying = currentId === id;

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
      key={id}
      onClick={playTrack}
      className={
        "first:border-t-0 flex gap-3 items-center border-t border-neutral-200 p-2 relative opacity-70 hover:bg-neutral-100 hover:cursor-pointer hover:opacity-100"
      }
    >
      <span className="opacity-50 min-w-[1.4rem] text-center">{index}</span>
      {withArtwork && (
        <Artwork artworkUrl={artwork.url} size="icon" className="min-w-max" />
      )}
      <div className="flex flex-col">
        <span className="line-clamp-1 text-sm md:text-base">{name}</span>
        <span className="line-clamp-1 text-xs md:text-sm opacity-50">
          {`by ${artistName}`}
        </span>
      </div>
      <Link
        onClick={(e) => e.stopPropagation()}
        to={detailsPage}
        className="ml-auto p-2"
      >
        <Icon
          className="text-2xl opacity-20 h-full flex my-auto line-clamp-1 "
          iconName="info-circle"
        />
      </Link>
    </li>
  );
};

export default Track;
