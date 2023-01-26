import { CSSProperties, FC } from "react";
import FooterWrapper from "../../UI/Wrappers/FooterWrapper";
import Artwork from "../Artwork";
import { PlaylistType } from "../../../types/api/Playlist";
import parseArtwork from "../../../utils/parseArtwork";
import PlaylistDesc from "./PlaylistDesc";
import PlaylistTracks from "./PlaylistTracks";

interface Props {
  playlistData: PlaylistType;
}

const Playlist: FC<Props> = ({ playlistData }) => {
  const playlist = playlistData.data[0].attributes;
  const { tracks } = playlistData.data[0].relationships;

  const { url } = playlist.artwork;

  console.log(playlistData);

  const itemTheme = parseArtwork(playlist.artwork);
  const styles: CSSProperties = { backgroundColor: itemTheme.bgColor };

  return (
    <article className="flex flex-col gap-8">
      <main
        style={styles}
        className="flex flex-col gap-3 items-center md:items-stretch md:flex-row md:gap-6 p-8 rounded-lg"
      >
        <div className="w-3/5 md:w-3/12 h-max">
          <Artwork artworkUrl={url} size="large" blurredShadow />
        </div>
        <PlaylistDesc attributes={playlist} totalTracks={tracks.data.length} />
      </main>
      <PlaylistTracks tracks={tracks} />
    </article>
  );
};

export default Playlist;
