import { FC } from "react";
import { SongsRelationship } from "../../../types/api/Common";
import Track from "../track/Track";

interface Props {
  tracks?: SongsRelationship;
}

const PlaylistTracks: FC<Props> = ({ tracks }) => {
  if (!tracks) return null;

  const tracksData = tracks.data;

  const content = tracksData.map((track, index) => {
    const { attributes, id } = track;
    const { artistName, name } = attributes;
    const artist = `by ${artistName}`;
    return (
      <Track
        index={++index}
        key={id}
        attributes={attributes}
        songId={id}
        title={name}
        cover
        name={artist}
      />
    );
  });

  return <ul>{content}</ul>;
};

export default PlaylistTracks;
