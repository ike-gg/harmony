import { FC } from "react";
import { AlbumRelationshipsTracks } from "../../../types/api/Album";
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
