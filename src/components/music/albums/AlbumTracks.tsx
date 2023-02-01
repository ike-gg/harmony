import classNames from "classnames";
import { CSSProperties, FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PlayerActions } from "../../../store/playerSlice";
import { RootState, useAppDispatch } from "../../../store/store";
import { AlbumRelationshipsTracks } from "../../../types/api/Album";
import parseArtwork from "../../../utils/parseArtwork";
import Icon from "../../UI/Icon";
import Track from "../track/Track";

interface Props {
  tracks?: AlbumRelationshipsTracks;
}

const AlbumTracks: FC<Props> = ({ tracks }) => {
  if (!tracks) return null;

  const tracksData = tracks.data.filter(
    (track) => track.type !== "music-videos"
  );

  const content = tracksData.map((track, index) => {
    const { attributes, id } = track;
    const { name, trackNumber, previews } = attributes;

    const unreleased = previews.length === 0;

    return (
      <Track
        index={trackNumber || ++index}
        attributes={attributes}
        songId={id}
        title={name}
        isUnreleased={unreleased}
        key={id}
      />
    );
  });

  return <ul>{content}</ul>;
};

export default AlbumTracks;
