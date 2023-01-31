import { FC } from "react";
import { PlaylistType } from "../../../types/api/Playlist";
import PlaylistTracks from "./PlaylistTracks";
import ItemDesc from "../common/desc/ItemDesc";
import SharedPlayButton from "../../player/SharedPlayButton";
import LibraryButton from "../../library/LibraryButton";

interface Props {
  playlistData: PlaylistType;
}

const Playlist: FC<Props> = ({ playlistData }) => {
  const { attributes: playlist, id } = playlistData.data[0];
  const { tracks } = playlistData.data[0].relationships;
  const { artwork, curatorName, name, url } = playlist;

  const tracksId = tracks.data.map((track) => track.id);

  const text = `${curatorName}, ${tracksId.length} tracks`;

  return (
    <article className="flex flex-col gap-8">
      <ItemDesc
        artwork={artwork}
        subtitle="PLAYLIST"
        text={text}
        title={name}
        urlItem={url}
      >
        <SharedPlayButton id={tracksId} />
        <LibraryButton item={{ attributes: playlist, id, type: "playlists" }} />
      </ItemDesc>
      <PlaylistTracks tracks={tracks} />
    </article>
  );
};

export default Playlist;
