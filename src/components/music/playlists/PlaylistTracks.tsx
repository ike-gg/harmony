import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAppleMusic from "../../../hooks/useAppleMusic";
import getSong from "../../../lib/getSong";
import { PlayerActions } from "../../../store/playerSlice";
import { RootState } from "../../../store/store";
import { SongsRelationship } from "../../../types/api/Common";
import parseArtwork from "../../../utils/parseArtwork";
import removeParentheses from "../../../utils/removeParentheses";
import Artwork from "../Artwork";

interface Props {
  tracks?: SongsRelationship;
}

const PlaylistTracks: FC<Props> = ({ tracks }) => {
  if (!tracks) return null;

  const dispatch = useDispatch();
  const { sendRequest } = useAppleMusic(getSong);
  const player = useSelector((state: RootState) => state.player);

  const playMusic = async (songId: string) => {
    dispatch(PlayerActions.loadingSong(songId));
    const track = await sendRequest({ id: songId });
    const songAttirbutes = track.data[0].attributes;
    dispatch(PlayerActions.changeSong({ ...songAttirbutes, id: songId }));
  };

  const tracksData = tracks.data;

  const content = tracksData.map((track, index) => {
    const { attributes, id } = track;
    const { name: fullName, artwork, artistName } = attributes;
    const name = removeParentheses(fullName);

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
      </li>
    );
  });

  return <ul>{content}</ul>;
};

export default PlaylistTracks;
