import { FC } from "react";
import { ArtistType } from "../../../types/api/Artist";
import Artwork from "../Artwork";
import ArtistAlbums from "./ArtistAlbums";
import ArtistDesc from "./ArtistDesc";
import ArtistPlaylists from "./ArtistPlaylists";

interface Props {
  artistData: ArtistType;
}

const Artist: FC<Props> = ({ artistData }) => {
  console.log(artistData);
  const artist = artistData.data[0].attributes;
  const albums = artistData.data[0].relationships.albums;
  const playlists = artistData.data[0].relationships.playlists;

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
      <ArtistAlbums albums={albums} />
      <ArtistPlaylists playlists={playlists} />
    </article>
  );
};

export default Artist;
