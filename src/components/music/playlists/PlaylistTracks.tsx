import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useAppleMusic from "../../../hooks/useAppleMusic";
import getSong from "../../../lib/getSong";
import { fetchCurrentSong, PlayerActions } from "../../../store/playerSlice";
import { RootState, useAppDispatch } from "../../../store/store";
import { SongsRelationship } from "../../../types/api/Common";
import parseArtwork from "../../../utils/parseArtwork";
import removeParentheses from "../../../utils/removeParentheses";
import Icon from "../../UI/Icon";
import Artwork from "../Artwork";

interface Props {
  tracks?: SongsRelationship;
}

const PlaylistTracks: FC<Props> = ({ tracks }) => {
  if (!tracks) return null;

  const dispatch = useAppDispatch();
  const player = useSelector((state: RootState) => state.player);

  const playMusic = async (songId: string) => {
    dispatch(PlayerActions.setSong(songId));
  };

  const tracksData = tracks.data;

  const content = tracksData.map((track, index) => {
    const { attributes, id } = track;
    const { name: fullName, artwork, artistName } = attributes;
    const name = removeParentheses(fullName);

    const detailsPage = `/song/${id}`;

    const playTrack = playMusic.bind(null, id);
    const isCurrentlyPlaying = player.id === id;

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
        <span className="opacity-50 min-w-[1.4rem] text-center">{++index}</span>
        <Artwork
          artworkUrl={artwork.url}
          size="icon"
          className="min-w-max"
          isTrack
        />
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
            className="text-2xl opacity-50 h-full flex my-auto line-clamp-1 "
            iconName="info-circle"
          />
        </Link>
      </li>
    );
  });

  return <ul>{content}</ul>;
};

export default PlaylistTracks;
