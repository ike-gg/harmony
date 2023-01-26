import { CSSProperties, FC } from "react";
import FooterWrapper from "../../UI/Wrappers/FooterWrapper";
import Artwork from "../Artwork";
import RelatedArtists from "../artists/RelatedArtists";
import { SongType } from "../../../types/api/Song";
import SongDesc from "./SongDesc";
import parseArtwork from "../../../utils/parseArtwork";
import RelatedAlbums from "../albums/RelatedAlbums";
import RelatedMusicVideos from "../musicvideo/RelatedMusicVideo";

interface Props {
  songData: SongType;
}

const Song: FC<Props> = ({ songData }) => {
  const song = songData.data[0].attributes;
  const {
    "music-videos": musicVideos,
    albums,
    artists,
  } = songData.data[0].relationships;

  const { url } = song.artwork;

  const itemTheme = parseArtwork(song.artwork);
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
        <SongDesc attributes={song} />
      </main>
      <FooterWrapper>
        <RelatedAlbums albums={albums} />
        <RelatedArtists artists={artists} />
        <RelatedMusicVideos musicVideos={musicVideos} />
      </FooterWrapper>
    </article>
  );
};

export default Song;
