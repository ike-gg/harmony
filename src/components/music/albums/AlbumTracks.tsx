import classNames from "classnames";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAppleMusic from "../../../hooks/useAppleMusic";
import getSong from "../../../lib/getSong";
import { PlayerActions } from "../../../store/playerSlice";
import { RootState } from "../../../store/store";
import { AlbumRelationshipTracks } from "../../../types/api/Album";

interface Props {
  tracks?: AlbumRelationshipTracks;
}

const AlbumTracks: FC<Props> = ({ tracks }) => {
  if (!tracks) return null;

  const player = useSelector((state: RootState) => state.player);

  const dispatch = useDispatch();

  const { sendRequest } = useAppleMusic(getSong);

  const playMusic = async (songId: string) => {
    dispatch(PlayerActions.loadingSong(songId));
    const track = await sendRequest({ id: songId });
    const songAttirbutes = track.data[0].attributes;
    dispatch(PlayerActions.changeSong({ ...songAttirbutes, id: songId }));
  };

  const tracksData = tracks.data.filter(
    (track) => track.type !== "music-videos"
  );

  const content = tracksData.map((track) => {
    const { attributes, id } = track;
    const { name, trackNumber } = attributes;

    const playTrack = playMusic.bind(null, id);

    const isUnreleased = attributes.previews.length === 0;

    const isCurrentlyPlaying = player.id === id;

    const stylesIfPlaying: React.CSSProperties = {
      background: `#${attributes.artwork.bgColor}`,
      color: `#${attributes.artwork.textColor1}`,
      borderRadius: "0.5rem",
      opacity: 1,
    };

    return (
      <li
        style={isCurrentlyPlaying ? stylesIfPlaying : {}}
        key={id}
        onClick={isUnreleased ? undefined : playTrack}
        className={classNames(
          "first:border-t-0 flex border-t border-neutral-200 py-4 relative opacity-70",
          {
            "hover:bg-neutral-100 hover:cursor-pointer hover:opacity-100":
              !isUnreleased,
          }
        )}
      >
        <span className="inline-block w-10 text-center font-light opacity-50">
          {trackNumber}
        </span>
        <span className="">{name}</span>
        {isUnreleased && (
          <span className="pl-3 text-neutral-400 font-light">Unreleased</span>
        )}
      </li>
    );
  });

  return <ul>{content}</ul>;
};

export default AlbumTracks;
