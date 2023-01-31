import classNames from "classnames";
import { CSSProperties, FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PlayerActions } from "../../../store/playerSlice";
import { RootState, useAppDispatch } from "../../../store/store";
import { AlbumRelationshipsTracks } from "../../../types/api/Album";
import parseArtwork from "../../../utils/parseArtwork";
import Icon from "../../UI/Icon";

interface Props {
  tracks?: AlbumRelationshipsTracks;
}

const AlbumTracks: FC<Props> = ({ tracks }) => {
  if (!tracks) return null;

  const dispatch = useAppDispatch();
  const player = useSelector((state: RootState) => state.player);

  const tracksData = tracks.data.filter(
    (track) => track.type !== "music-videos"
  );

  const content = tracksData.map((track) => {
    const { attributes, id } = track;
    const { name, trackNumber, artwork } = attributes;

    const detailsPage = `/song/${id}`;

    const playTrack = () => {
      dispatch(PlayerActions.setSong(id));
    };

    const isUnreleased = attributes.previews.length === 0;
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
        onClick={isUnreleased ? undefined : playTrack}
        className={classNames(
          "first:border-t-0 flex border-t border-neutral-200 items-center py-3 relative opacity-70",
          {
            "hover:bg-neutral-100 hover:cursor-pointer hover:opacity-100":
              !isUnreleased,
          }
        )}
      >
        <span className="inline-block w-10 text-center font-light opacity-50">
          {trackNumber}
        </span>
        <span>{name}</span>
        {isUnreleased && (
          <span className="pl-3 text-neutral-400 font-light">Unreleased</span>
        )}
        <Link
          onClick={(e) => e.stopPropagation()}
          to={detailsPage}
          className="ml-auto px-4"
        >
          <Icon
            className="text-2xl opacity-20 h-full flex my-auto line-clamp-1 "
            iconName="info-circle"
          />
        </Link>
      </li>
    );
  });

  return <ul>{content}</ul>;
};

export default AlbumTracks;
