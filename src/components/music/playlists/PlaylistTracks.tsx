import { FC } from "react";
import { SongsRelationship } from "../../../types/api/Common";
import Track from "../track/PlaylistTrack";

interface Props {
  tracks?: SongsRelationship;
}

const PlaylistTracks: FC<Props> = ({ tracks }) => {
  if (!tracks) return null;

  const tracksData = tracks.data;

  const content = tracksData.map((track, index) => {
    return <Track index={++index} track={track} artwork key={track.id} />;
  });

  return <ul>{content}</ul>;
};

export default PlaylistTracks;
