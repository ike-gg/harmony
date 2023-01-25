import { FC } from "react";
import { ArtistType } from "../../../types/api/Artist";
import Artwork from "../Artwork";
import ArtistDesc from "./ArtistDesc";
import RelatedAlbums from "../albums/RelatedAlbums";
import RelatedPlaylists from "../playlists/RelatedPlaylists";
import RelatedMusicVideos from "../musicvideo/RelatedMusicVideo";

interface Props {
  artistData: ArtistType;
}

const Artist: FC<Props> = ({ artistData }) => {
  console.log(artistData);
  const artist = artistData.data[0].attributes;

  const {
    albums,
    playlists,
    "music-videos": musicVideos,
  } = artistData.data[0].relationships;

  const { url } = artist.artwork;

  return (
    <article className="flex flex-col gap-8">
      <main
        style={{ background: `#${artist.artwork.bgColor}` }}
        className="flex flex-col gap-3 items-center md:items-stretch md:flex-row md:gap-6 p-8 rounded-lg"
      >
        <div className="w-3/5 md:w-3/12 h-max">
          <Artwork artworkUrl={url} size="large" blurredShadow />
        </div>
        <ArtistDesc attributes={artist} />
      </main>
      <RelatedAlbums rows={2} albums={albums} />
      <RelatedMusicVideos musicVideos={musicVideos} />
      <RelatedPlaylists playlists={playlists} />
    </article>
  );
};

export default Artist;
